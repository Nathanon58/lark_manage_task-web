
import { Link } from 'preact-router/match'
import style from './style.css';
import { Observer } from 'mobx-react-lite';
import { useStore } from '../../helpers/use-store'

const Header = () => {
  return (
    <Observer>
      {() => <header class={style.header}>
        {/* <h1>Preact App {userStore.returnCount || 0}</h1> */}
        <nav>
          <Link activeClassName={style.active} href='/'>Home</Link>
          <Link activeClassName={style.active} href='/profile'>Me</Link>
          <Link activeClassName={style.active} href='/profile/john'>John</Link>
        </nav>
      </header>}
    </Observer>
  )
}

export default Header
