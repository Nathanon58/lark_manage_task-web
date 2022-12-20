import styled from 'styled-components'
import { Card } from "antd";

const CardStyle = styled(Card)`
	border-radius: 15px;
`

export const CardTheme = ({ title, content, style, ...props }) => {
    return (
        <CardStyle
            title={title || ''}
            style={style}
            {...props}
        >
            {content}
        </CardStyle>
    )
}