import '../../App'
import ButtonIcon from '../../shared/ButtonIcon'
import { IconHome, IconLogin } from '../../shared/icons'
import './Header.scss'

function Header () {
  return (
    <div className='Header'>
      <ButtonIcon icon={IconHome()} />
      <ButtonIcon icon={IconLogin()} />
    </div>
  )
}

export default Header
