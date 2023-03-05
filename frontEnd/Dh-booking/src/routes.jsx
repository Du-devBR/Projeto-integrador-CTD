import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { MainLayout } from "./pages/MainLayout"
import { Product } from "./pages/Product"
import { Register } from "./pages/Register"


export function Routes(){
  const appRouter = createBrowserRouter([
    {
      path:'',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Navigate to="/home" replace={true} />
        },
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        },{
          path:'produto/:id',
          element: <Product />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={appRouter} />

  )
}
