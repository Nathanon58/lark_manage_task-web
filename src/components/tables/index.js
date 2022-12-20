import React, { useContext, useEffect, useRef } from "react";
import { useState } from "preact/hooks";
import { Table, Input, Form } from 'antd';
const EditableContext = React.createContext(null);

const TableForm = ({ rowSelection, columns, dataSource, expandable, noPagination, components, loading, defaultPageSize }) => {
    const [pageSize, setPageSize] = useState(defaultPageSize || 10);

    const onShowSizeChange = (current, sizepage) => {
        setPageSize(sizepage)
    }

    return (
        <div style={{ marginTop: '2%' }}>
            <Table
                rowSelection={rowSelection}
                expandable={expandable}
                columns={columns}
                dataSource={dataSource || []}
                bordered
                components={components}
                size="small"
                loading={loading}
                scroll={
                    { x: 'max-content' }
                }
                pagination={!noPagination && {
                    showSizeChanger: true,
                    onShowSizeChange,
                    pageSize,
                    total: dataSource.length || 0,
                    showTotal: (total, range) => `${total} รายการ`,
                    defaultPageSize: 10,
                    defaultCurrent: 1,
                }}
            />
        </div>
    )
}
export default TableForm

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;
    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
            // rules={[
            //     {
            //         required: true,
            //         message: `${title} is required.`,
            //     },
            // ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }
    return <td {...restProps}>{childNode}</td>;
};

export const components = {
    body: {
        row: EditableRow,
        cell: EditableCell,
    },
};

export const EditTable = (props) => {
    const { rowSelection, columns, dataSource, expandable, noPagination, loading, editRow } = props
    const [pageSize, setPageSize] = useState(10);

    const onShowSizeChange = (current, pageSize) => {
        setPageSize(pageSize)
    }

    const [dataTable, setDataTable] = useState(dataSource)
    const [columnTable, setColumnTable] = useState(columns)
    const editingKey = editRow;

    const isEditing = (record) => record.key === editingKey;

    useEffect(() => {
        setDataTable(dataSource)
    }, [dataSource])

    useEffect(() => {
        setColumnTable(columns)
    }, [columns])

    const columnsTable = columnTable && columnTable.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: isEditing(record),
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });

    const handleSave = (row) => {
        props.onChange && props.onChange(row)
        const newData = [...dataSource];
        const index = newData.findIndex((it) => row.key === it.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setDataTable(newData)
    };

    return (
        <div style={{ marginTop: '2%' }}>
            <Table
                // className="shadow"
                rowClassName={rowSelection}
                expandable={expandable}
                dataSource={dataTable || []}
                columns={columnsTable}
                components={components}
                pagination={false}
                bordered
                size="small"
                loading={loading}
                scroll={
                    { x: 'max-content' }
                }
                pagination={!noPagination && {
                    showSizeChanger: true,
                    onShowSizeChange,
                    pageSize,
                    total: (dataSource && dataSource.length) || 0,
                    showTotal: (total, range) => `${total} รายการ`,
                    defaultPageSize: 20,
                    defaultCurrent: 1,
                }}
            // rowClassName={(_, i) => i % 2 === 1 ? 'row-even editable-row' : 'row-odd editable-row'}
            />
        </div>
    )
}
