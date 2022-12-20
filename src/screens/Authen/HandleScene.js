import { Spin } from "antd"
import { route } from "preact-router"
import { useEffect } from "preact/hooks"
import UserMobx from "../../mobx/UserMobx"
import { POST, HANDLE_TOKEN } from "../../services"

const HandleScene = (props) => {

    if (!props.matches || !props.matches.auth) {
        return route('/account/login')
    }

    useEffect(() => {
        onHandle()
    }, [])

    const onHandle = async () => {
        try {
            const res = await POST(HANDLE_TOKEN, { auth: props.matches.auth });
            const { result, success } = res
            if (success) {
                await UserMobx.onLogin({ ...result })
                route('/manage-caseList')
            }
        } catch (error) {
            const { message } = error
            console.log(message)
            return route('/account/login')
        }
    }

    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '350px'
    }}>
        <Spin />
    </div>
}

export default HandleScene