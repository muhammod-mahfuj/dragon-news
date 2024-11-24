import { createBrowserRouter, Navigate } from 'react-router-dom'
import HomeLayouts from './layouts/HomeLayouts';
import CategoryNews from './Pages/CategoryNews';
import AuthLayouts from './layouts/AuthLayouts';
import Login from './Pages/Login';
import Register from './Pages/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayouts></HomeLayouts>,
    children:[
      {
        path: '',
        element: <Navigate to='/category/01'></Navigate>
      },
      {
        path:'/category/:id',
        element:<CategoryNews></CategoryNews>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ]
  },
  {
    path: "/news",
    element:<h3>News page</h3>
  },
  {
    path: "/auth",
    element:<AuthLayouts></AuthLayouts>,
    children:[
      {
          path:"/auth/login",
          element: <Login></Login>,
      },
      {
        path:"/auth/register",
        element:<Register></Register>,
      },
    ]
  },
  {
    path: "*",
    element:<h3>error page</h3>
  },
])

export default router;
