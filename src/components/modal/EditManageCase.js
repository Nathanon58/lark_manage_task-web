import React from "react";
import moment from "moment";
import { EditTable } from "../tables";
import { ButtonTheme } from '../buttons';
import { TextLarge } from "../forms/text";
import { useForm } from "react-hook-form";
import { Modal, notification } from 'antd';
import { useState, useEffect } from "preact/hooks";
import { SelectDropdown } from "../forms/dropdown";
import { DatePickerForm } from "../forms/datePicker";
import { changeColor, convertStrToFormat } from "../../functions";
import { ContainerButton } from '../../style/styledComponentGlobal';
import { EditCaseColumn } from "../../constants/global/columnTableForm";
import { GET, GET_COMMENT_BYID, INSERT_COMMENT, POST } from "../../services";

export const EditManageCase = ({ title, visible, data, onClose }) => {

    const [dataEdit, setDataEdit] = useState([])
    const [loading, setLoading] = useState(false)
    const [addComment, setAddComment] = useState({})
    const [requestNumber, setRequestNumber] = useState('')
    const [optionsFollowUp, setOptionsFollowUp] = useState([])
    const { handleSubmit, setValue, getValues, control, clearErrors } = useForm();

    useEffect(() => {
        let defaultValue = data.defaultValue
        if (defaultValue) {
            setOptionsFollowUp(data.optionIT)
            setRequestNumber(defaultValue.request_no)
            defaultValue.request_no && onFetchHistory(defaultValue.request_no, data.optionIT)
        }
    }, [data])

    function disabledDate(current) {
        return current < moment().endOf('day');
    }

    const onFetchHistory = async (reqNo, optionsIT) => {
        try {
            setLoading(true)
            let res = await GET(GET_COMMENT_BYID(reqNo))
            const { result, success } = res
            if (success) {
                let dataComment = result.map((val, i) => ({
                    key: i + 1,
                    duedate: <span style={{ color: `${changeColor(val.Duedate, "dateNow")}` }}>{convertStrToFormat(val.Duedate, 'date')}</span>,
                    it_follow_up: val.ITLabel,
                    it_comment: val.ItComment,
                    pr_ep: val.PrEp,
                    date_input: convertStrToFormat(val.CreateDate, 'date'),
                }))
                const itemFollowUp = {
                    name: 'it_follow_up',
                    placeholder: 'เลือกผู้รับผิดชอบ',
                    defaultValue: '',
                    value: '',
                    options: optionsIT
                }
                const itemDatePicker = {
                    name: 'duedate',
                    defaultValue: '',
                    value: '',
                    disabledDate: disabledDate,
                }
                const newData = {
                    key: result.length + 1,
                    duedate: <DatePickerForm
                        item={itemDatePicker}
                        control={control}
                    />,
                    it_follow_up: <SelectDropdown
                        item={itemFollowUp}
                        control={control}
                    />,
                    it_comment: '',
                    pr_ep: '',
                    date_input: '',
                }
                setDataEdit([...dataComment, newData])
            }
        } catch (err) {
            const { message } = err
            notification['error']({
                message: `GET_COMMENT เกิดข้อผิดพลาด`,
                description:
                    `${message}`,
            });
        } finally {
            setLoading(false)
        }
    }

    const onSubmit = async () => {
        try {
            setLoading(true)
            let duedate = getValues('duedate')
            const itFollowUp = getValues('it_follow_up')
            const pr_ep = addComment && addComment.pr_ep
            const it_comment = addComment && addComment.it_comment
            const itLabel = optionsFollowUp.filter(e => e.value === itFollowUp)
            let obj = {
                pr_ep: pr_ep || "",
                it_comment: it_comment || "",
                approve_no: requestNumber,
                it_follow_up: itFollowUp || "",
                it_label: itLabel[0].label,
                duedate: duedate ? duedate.format('YYYY-MM-DD') : '',
            }
            let res = await POST(INSERT_COMMENT, obj)
            const { success, message } = res
            if (success) {
                notification['success']({
                    message: 'เพิ่ม comment สำเร็จ',
                    description:
                        `${message}`,
                });
                onCloseMain()
                // data.reApi()
            }
        } catch (err) {
            const { message } = err
            notification['error']({
                message: `GET_COMMENT เกิดข้อผิดพลาด`,
                description:
                    `${message}`,
            });
        } finally {
            setLoading(false)
        }
    }

    const onCloseMain = () => {
        setValue('duedate', '')
        setValue('it_follow_up', '')
        setValue('it_comment', '')
        setValue('pr_ep', '')
        setDataEdit([])
        clearErrors()
        onClose()
    }

    const onChangeInput = (row) => {
        setAddComment(row)
    }

    return (
        <Modal
            title={title || "modal"}
            visible={visible}
            maskClosable={false}
            onCancel={onCloseMain}
            footer={null}
            destroyOnClose={true}
            width={1500}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextLarge text={`Request No.${requestNumber}`} />
                <EditTable
                    editRow={dataEdit.length}
                    loading={loading}
                    onChange={onChangeInput}
                    columns={EditCaseColumn()}
                    dataSource={dataEdit}
                    rowSelection={() => 'editable-row'}
                />
                <ContainerButton right>
                    <ButtonTheme useFor="CANCEL" onClick={onCloseMain} />
                    <ButtonTheme useFor="SUBMIT" htmlType="submit" />
                </ContainerButton>
            </form>
        </Modal>
    )
}