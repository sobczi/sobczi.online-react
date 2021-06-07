import { Link } from 'react-router-dom'
import '../../App'
import ButtonIcon from '../../shared/ButtonIcon'
import { IconHome, IconLogin } from '../../shared/icons'
import './Header.scss'

function Header () {
  return (
    <div className='Header'>
      <Link to='/'>
        <ButtonIcon icon={IconHome()} />
      </Link>
      <Link to='/login'>
        <ButtonIcon icon={IconLogin()} />
      </Link>
    </div>
  )
}

export default Header
