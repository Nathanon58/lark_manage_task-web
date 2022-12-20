
import { SearchLayout } from "./SearchLayout";
import { TableLayout } from './TableLayout'

export const PageLayout = ({ searchLayout, tableLayout, content, action }) => {
	return (
		<div style={{ width: '100%' }}>
			{
				(searchLayout || content || tableLayout || action) &&
				<div style={{ padding: '1%', backgroundColor: '#f3f9fd', width: '100%', borderRadius: '15px' }}>
					{
						searchLayout &&
						<SearchLayout props={{ ...searchLayout }} />
					}
					{
						content
					}
					{
						tableLayout &&
						<TableLayout props={{ ...tableLayout }} />
					}
					{
						action
					}
				</div>
			}
		</div>
	)
}
