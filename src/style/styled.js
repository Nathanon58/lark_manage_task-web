import { Col } from 'antd'
import styled from 'styled-components'


export const ContainerButton = styled(Col)`
	text-align-last: ${props =>
        props.left ? 'start' :
            props.center ? 'center' :
                props.right ? 'end' : ''
    };
	width: 100%;
`