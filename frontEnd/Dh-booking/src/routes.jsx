import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { MainLayout } from "./pages/MainLayout"
import { Register } from "./pages/Register"


export function Routes(){
  const appRouter = createBrowserRouter([
    {
      path:'',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={appRouter} />
  )
}
