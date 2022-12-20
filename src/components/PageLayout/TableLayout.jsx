import React from "react";
import TableForm from "../tables";
import { CardTheme } from "../card/CardTheme";


export const TableLayout = ({ props }) => {
	const { style, columns, dataSource, rowSelection, extraContent, expandable, components, loading, defaultPageSize } = props
	return (
		<CardTheme
			style={{ marginTop: '2%', ...style }}
			content={
				<>
					{extraContent}
					<TableForm
						loading={loading}
						columns={columns}
						components={components}
						dataSource={dataSource}
						expandable={expandable}
						rowSelection={rowSelection}
						defaultPageSize={defaultPageSize}
					/>
				</>
			}
		/>
	)
}