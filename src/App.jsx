import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from './ui/Home'
import Menu, { loader as MenuLoader } from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder, {action as createOrderAction} from './features/order/CreateOrder'
import Order, {loader as OrderMenu} from './features/order/Order'
import AppLayout from "./ui/AppLayout"
import Error from './ui/Error'

export default function App() {
  const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
        errorElement: <Error />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: OrderMenu,
        errorElement: <Error />
      }
    ]
  }
  ]);
  return (
    <RouterProvider router={router} />
  )
}
