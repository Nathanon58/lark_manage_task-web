import { Tag } from "antd"

export const renderTagColor = (code, text) => {
    if (code) {
        let colorTemp = ''
        let tempCode = code
        switch (tempCode) {
            case 'PENDING':
                colorTemp = 'warning'
                break;
            case 'APPROVED':
                colorTemp = 'success'
                break;
            case '099':
                colorTemp = 'error'
                break;
            default:
                colorTemp = 'purple'
                break;
        }
        return <Tag color={colorTemp}>{text}</Tag>
    }
}