
/**
 * 
 * LoginForm --> เข้าสู่ระบบ
 */
export const LoginForm = () => {
    return [
        {
            key: '1',
            span: 24,
            disabled: false,
            name: 'username',
            label: 'ชื่อผู้ใช้ (รหัสพนักงาน)',
            type: 'INPUT',
            value: '',
            defaultValue: '',
            rules: { required: true }
        },
        {
            key: '1',
            span: 24,
            disabled: false,
            name: 'firstname',
            label: 'ชื่อพนักงาน',
            type: 'INPUT',
            value: '',
            defaultValue: '',
        },
        {
            key: '2',
            span: 24,
            disabled: false,
            name: 'password',
            label: 'รหัสผ่าน',
            type: 'INPUT_PASSWORD',
            value: '',
            defaultValue: '',
            rules: {
                required: true,
                maxLength: {
                    value: 15,
                    message: 15
                },
            }
        },
    ]
}