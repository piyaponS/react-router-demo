import { Link } from 'react-router-dom'

import SearchOrder from '../features/order/SearchOrder'

export default function Header() {
  return (
    <header>
        <Link to="/">Fast React Pizza Co.</Link>
        <SearchOrder />
        <p>Piyapon Sae.</p>
    </header>
  )
}
