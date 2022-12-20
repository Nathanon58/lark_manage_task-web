import imageNo from '../../assets/icons/no.png'

const LoginScene = () => {
  return (
    <div style={{ backgroundColor: '#f3f9fd' }}>
      <div style={{ display: 'flex', minHeight: '100vh', margin: '0 5%' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto' }}>
          <img src={imageNo} width={150} />
          <h3 style={{ textAlign: 'center' }}>คุณไม่มีสิทธิ์เข้าถึง กรุณาติดต่อแอดมิน</h3>
        </div>
      </div>
    </div>
  )
}

export default LoginScene
