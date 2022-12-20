import React from "react";
import { EditTable } from "../tables";
import { CardTheme } from "../card/CardTheme";


export const EditTableLayout = ({ props }) => {
    const { style, columns, dataSource, rowSelection, extraContent, expandable, components, loading } = props
    return (
        <CardTheme
            style={{ marginTop: '2%', ...style }}
            content={
                <>
                    {extraContent}
                    <EditTable
                        loading={loading}
                        columns={columns}
                        components={components}
                        dataSource={dataSource}
                        expandable={expandable}
                        rowSelection={rowSelection}
                    />
                </>
            }
        />
    )
}