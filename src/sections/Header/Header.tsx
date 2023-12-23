import { useNavigate } from 'react-router-dom'
import './Header.scss'
// @ts-expect-error path is not being recognized
import pokeball from '../../assets/images/pokeball.png'
// @ts-expect-error path is not being recognized
import logo from '../../assets/images/logo.png';

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='header-container'>
      <div
        className='header-image-container'
        onClick={async () => {
          navigate('/')
        }}
      >
        <img src={pokeball} alt='Pokeball' className='header-logo' />
      </div>
      <div
        style={{ marginLeft: '8px' }}
        className='header-image-container'
        onClick={async () => {
          navigate('/')
        }}
      >
        <img src={logo} alt='Pokédex logo' className='header-logo' />
      </div>
    </div>
  )
}

export default Header
