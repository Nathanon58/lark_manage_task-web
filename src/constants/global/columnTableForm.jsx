import { ButtonTheme } from "../../components/buttons"
import { changeColor, convertStrToFormat, fnSort } from "../../functions"
import { ContainerButton } from "../../style/styledComponentGlobal"
import { renderTagColor } from "../renderTag"

export const CaseListColumn = ({ editAction }) => {
	return [
		{
			title: 'ลำดับ',
			dataIndex: 'key',
			align: 'center',
			width: '5em',
			sorter: (a, b) => fnSort(a, b, 'key'),
			// ...renderSearchColumn('key', searchInput)
		},
		{
			title: 'Request\nNo.',
			dataIndex: 'request_no',
			align: 'center',
			width: '7em',
			sorter: (a, b) => fnSort(a, b, 'request_no'),
			render(value) {
				return {
					props: {
						style: { fontSize: '12px' }
					},
					children: value
				}
			}
		},
		{
			title: 'Status',
			dataIndex: 'status',
			width: '8em',
			align: 'center',
			filters: [
				{ text: 'pending', value: 'PENDING' },
				{ text: 'approved', value: 'APPROVED' },
			],
			onFilter: (value, record) => record.status === value,
			sorter: (a, b) => fnSort(a, b, 'status'),
			render: (text, record) => {
				return renderTagColor(record.status, record.status)
			}
		},
		{
			title: 'Submitted at',
			dataIndex: 'submit_time',
			align: 'center',
			width: '8em',
			sorter: (a, b) => fnSort(a, b, 'submit_time'),
			render(text) {
				return {
					children: <span>{convertStrToFormat(`${text}`, 'datetime')}</span>
				};
			}
		},
		{
			title: 'Requesters\nname',
			dataIndex: 'requesters_name',
			align: 'center',
			width: '10em',
			sorter: (a, b) => fnSort(a, b, 'requesters_name'),
		},
		{
			title: 'Department\nsupervisor',
			dataIndex: 'department_sup',
			align: 'center',
			width: '10em',
			sorter: (a, b) => fnSort(a, b, 'department_sup'),
		},
		{
			title: 'Approval records',
			dataIndex: 'approval_records',
			align: 'center',
			width: '20em',
			sorter: (a, b) => fnSort(a, b, 'approval_records'),
			render(value) {
				return {
					props: {
						style: { textAlign: "left" }
					},
					children: value
				}
			}
		},
		{
			title: 'Current approver(s)',
			dataIndex: 'current_approver',
			align: 'center',
			width: '10em',
			sorter: (a, b) => fnSort(a, b, 'current_approver'),
			render(value) {
				return {
					props: {
						style: { textAlign: "left" }
					},
					children: value
				}
			}
		},
		{
			title: 'ความเร่งด่วน',
			dataIndex: 'urgency',
			align: 'center',
			width: '8em',
			sorter: (a, b) => fnSort(a, b, 'urgency'),
		},
		{
			title: 'วันที่ต้องการ\nใช้งาน',
			dataIndex: 'usage_date',
			align: 'center',
			width: '8em',
			sorter: (a, b) => fnSort(a, b, 'usage_date'),
			render(text) {
				return {
					children: <span style={{ color: `${changeColor(text, "dateNow")}` }}>{convertStrToFormat(`${text}`, 'date')}</span>
				};
			}
		},
		{
			title: 'ประเภท\nอุปกรณ์',
			dataIndex: 'type_accessory',
			align: 'center',
			width: '8em',
			sorter: (a, b) => fnSort(a, b, 'type_accessory'),
		},
		{
			title: 'อุปกรณ์ที่ต้องการเบิก-SW',
			dataIndex: 'accessory',
			align: 'center',
			width: '15em',
			sorter: (a, b) => fnSort(a, b, 'accessory'),
			render(value) {
				return {
					props: {
						style: { textAlign: "left", whiteSpace: 'pre-wrap' }
					},
					children: value
				}
			}
		},
		{
			title: 'แนบรูป\nรายละเอียด',
			dataIndex: 'request_image',
			align: 'center',
			width: '8em',
			sorter: (a, b) => fnSort(a, b, 'request_image'),
		},
		{
			title: 'แนบไฟล์\nรายละเอียด',
			dataIndex: 'request_filedetail',
			align: 'center',
			width: '8em',
			sorter: (a, b) => fnSort(a, b, 'request_filedetail'),
			render(value) {
				return {
					props: {
						style: { textAlign: "center", whiteSpace: 'pre-wrap' }
					},
					children: value
				}
			}
		},
		{
			title: 'ผู้ติดต่อกลับ',
			dataIndex: 'request_contact',
			align: 'center',
			width: '10em',
			sorter: (a, b) => fnSort(a, b, 'request_contact')
		},
		{
			title: 'หมายเหตุ',
			dataIndex: 'remark',
			align: 'center',
			width: '15em',
			sorter: (a, b) => fnSort(a, b, 'remark'),
			render(value) {
				return {
					props: {
						style: { textAlign: "left" }
					},
					children: value
				}
			}
		},
		{
			title: 'Duedate',
			dataIndex: 'duedate',
			align: 'center',
			width: '8em',
			sorter: (a, b) => fnSort(a, b, 'duedate'),
			render(text) {
				return {
					children: <span style={{ color: `${changeColor(text, "dateNow")}` }}>{convertStrToFormat(`${text}`, 'date')}</span>
				};
			}
		},
		{
			title: 'IT (comment)',
			dataIndex: 'it_comment',
			align: 'center',
			width: '15em',
			sorter: (a, b) => fnSort(a, b, 'it_comment'),
			render(value) {
				return {
					props: {
						style: { textAlign: "left" }
					},
					children: value
				}
			}
		},
		{
			title: 'IT Followup',
			dataIndex: 'it_followup',
			align: 'center',
			width: '10em',
			sorter: (a, b) => fnSort(a, b, 'it_followup')
		},
		{
			title: 'PR/EP',
			dataIndex: 'pr_ep',
			align: 'center',
			width: '15em',
			sorter: (a, b) => fnSort(a, b, 'pr_ep')
		},
		{
			title: 'แก้ไข',
			dataIndex: 'action',
			align: 'center',
			width: '8em',
			fixed: 'right',
			render: (text, record) => {
				return (
					<ContainerButton center>
						<ButtonTheme size="small" useFor="EDIT" onClick={() => editAction(record)} />
					</ContainerButton>
				)
			}
		},
	]
}

export const EditCaseColumn = () => {
	return [
		{
			title: 'ลำดับ',
			dataIndex: 'key',
			align: 'center',
			width: '5em'
			// ...renderSearchColumn('key', searchInput)
		},
		{
			title: 'Duedate',
			dataIndex: 'duedate',
			align: 'center',
			width: '10em',
		},
		{
			title: 'IT Followup',
			dataIndex: 'it_follow_up',
			align: 'center',
			width: '10em'
			// ...renderSearchColumn('key', searchInput)
		},
		{
			title: 'IT (comment)',
			dataIndex: 'it_comment',
			align: 'center',
			width: '15em',
			editable: true,
			sorter: (a, b) => fnSort(a, b, 'it_comment'),
			rules: {
				required: false,
			},
			render(value) {
				return {
					props: {
						style: { textAlign: "center" }
					},
					children: value
				}
			}
		},
		{
			title: 'PR/EP',
			dataIndex: 'pr_ep',
			align: 'center',
			width: '15em',
			editable: true,
			sorter: (a, b) => fnSort(a, b, 'pr_ep'),
			rules: {
				required: false,
			},
		},
		{
			title: 'วันที่เพิ่มข้อมูล',
			dataIndex: 'date_input',
			align: 'center',
			width: '10em',
			sorter: (a, b) => fnSort(a, b, 'pr_ep')
		},
	]
}
