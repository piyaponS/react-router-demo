import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
    const navigate = useNavigation()
    const isLoading = navigate.state
  return (
    <div className="layout">
        {isLoading === 'loading' && <Loader />}
        <Header />
        <main>
            <Outlet />
        </main>
        <CartOverview />
    </div>
  )
}
