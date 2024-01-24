import { NavLink } from 'react-router-dom'
//NavLink для навигации и в нем есть класс active при нахождении на этой странице Link  просто для ссылки
export default function Header() {
  return (
    <div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/users'>Users</NavLink>
        </nav>
    </div>
  )
}
