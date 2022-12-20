import { Button } from "antd"
import styled from 'styled-components'
import { color } from "../../resources/color"
import { Icon } from "../../resources/icon"

export const ButtonTheme = (props) => {
	return (
		renderButtonType(props)
	)
}

const renderButtonType = (props) => {
	let { useFor, title } = props;
	let stuff = {
		htmlType: props.htmlType,
		style: { ...props.style },
		...props
	}

	switch (useFor) {
		case 'SEARCH':
			title = 'ค้นหา'
			stuff = {
				...stuff,
				bgcolor: color.search,
				icon: <Icon.search />,
				type: "primary"
			}
			break;
		case 'EDIT':
			title = 'แก้ไข'
			stuff = {
				...stuff,
				bgcolor: color.edit,
				icon: <Icon.edit />,
				type: "primary"
			}
			break;
		case 'REMOVE':
			title = 'ลบ'
			stuff = {
				...stuff,
				bgcolor: color.remove,
				icon: <Icon.remove />,
				type: "primary"
			}
			break;
		case 'VIEW':
			stuff = {
				...stuff,
				icon: <Icon.search />,
				type: "primary"
			}
			break;
		case 'CLEAR':
			title = 'ล้างข้อมูล'
			stuff = {
				...stuff,
				icon: <Icon.clear />,
				type: "ghost"
			}
			break;
		case 'DOWNLOAD':
			title = title || 'ดาว์นโหลด'
			stuff = {
				...stuff,
				bgcolor: color.logout,
				icon: <Icon.download />,
				type: "primary"
			}
			break;
		case 'PRINT':
			title = title || 'พิมพ์'
			stuff = {
				...stuff,
				bgcolor: color.remove,
				icon: <Icon.print />,
				type: "primary"
			}
			break;
		case 'SUBMIT':
			title = 'บันทึก'
			stuff = {
				...stuff,
				bgcolor: color.theme,
				icon: <Icon.save />,
				type: "primary"
			}
			break;
		case 'CONFIRM':
			title = title || 'ยืนยัน'
			stuff = {
				...stuff,
				bgcolor: color.theme,
				icon: <Icon.confirm />,
				type: "primary"
			}
			break;
		case 'CANCEL':
			title = 'ยกเลิก'
			stuff = {
				...stuff,
				// icon: <Icon.download />,
				type: "ghost"
			}
			break;
		case 'LOGIN':
			title = 'เข้าสู่ระบบ'
			stuff = {
				...stuff,
				icon: <Icon.login />,
				type: "primary"
			}
			break;
		case 'LOGOUT':
			stuff = {
				...stuff,
				bgcolor: color.logout,
				icon: <Icon.login />,
				type: "primary"
			}
			break;
		case 'FORGET_PASSWORD':
			title = 'ลืมรหัสผ่าน'
			stuff = {
				...stuff,
				icon: <Icon.forgetPassword />,
				type: "ghost"
			}
			break;
		case 'BACK':
			title = 'ย้อนกลับ'
			stuff = {
				...stuff,
				icon: <Icon.back />,
				type: "ghost"
			}
			break;
		case 'SWITCH':
			stuff = {
				...stuff,
				icon: <Icon.back />,
				type: "primary"
			}
			break;
		case 'CREATE':
			title = 'เพิ่ม'
			stuff = {
				...stuff,
				icon: <Icon.create />,
				type: "primary"
			}
			break;
		case 'ZIP_XML':
			stuff = {
				...stuff,
				icon: <Icon.download />,
				type: "primary"
			}
			break;
		case 'RESEND':
			stuff = {
				...stuff,
				icon: <Icon.reAct />,
				type: "ghost"
			}
			break;
		case 'REQ_PASSWORD':
			stuff = {
				...stuff,
				icon: <Icon.forgetPassword />,
				bgcolor: color.search,
				type: "primary"
			}
			break;
		case 'RE_CHECK':
			stuff = {
				...stuff,
				icon: <Icon.recheck />,
				// bgcolor: 'orange',
				type: "dashed",
			}
			break;
		case 'REGISTER':
			stuff = {
				...stuff,
				icon: <Icon.register />,
				bgcolor: color.submit,
				type: "primary"
			}
			break;
	}
	return (
		useFor &&
		<ButtonStyle shape="round" {...stuff} size={stuff.size || "middle"}>
			{title}
		</ButtonStyle>
	)
}

const ButtonStyle = styled(Button)`
	align-items: center;
	margin: 5px;
	background-color: ${props => props.bgcolor};
	border-color: ${props => props.bgcolor};
	
	:hover, :focus, :active {
		background-color: ${props => props.bgcolor};
		border-color: ${props => props.bgcolor};
		opacity: ${props => props.bgcolor ? '0.5' : 'unset'};;
	}
`