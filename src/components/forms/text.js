import styled from 'styled-components'
/*

	TextLarge  18px --> header
	TextMedium 16px--> title card
	TextSmall 14px --> menu, detail
	TextXSMall 12px --> ข้อความ 'โปรดระบุ'
*/


export const TextXSMall = ({ color, bold, text, align }) => {
	return (
		<TextStyle color={color} bold={bold} size={'12px'} align={align} >{text}</TextStyle>
	)
}

export const TextSmall = ({ color, bold, text, align, onClick }) => {
	return (
		<TextStyle color={color} bold={bold} size={'14px'} align={align} onClick={onClick}>{text}</TextStyle>
	)
}

export const TextLarge = ({ color, bold, text, align }) => {
	return (
		<TextStyle color={color} bold={bold} size={'18px'} align={align}>{text}</TextStyle>
	)
}

export const TextLogoLogin = ({ color, bold, text, align }) => {
	return (
		<TextStyle color={color} bold={bold} size={'24px'} align={align}>{text}</TextStyle>
	)
}

const TextStyle = styled.p`
	font-weight: ${props => props.bold ? 'bold' : ''};
	color: ${props => props.color ? props.color : 'black'};
	font-size: ${props => props.size ? props.size : '12px'};
	text-align: ${props => props.align ? props.align : ''};
	margin: 0;
`