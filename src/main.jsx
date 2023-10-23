import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// React//
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './MainRoot/MainRoot';
import Home from './components/Home/Home';
import Login from './Authonction/AuthProvider/Login/Login';
import SignUp from './Authonction/AuthProvider/SignUp/SignUp';
import About from './components/Home/navbar/About/About';
import Contacts from './components/Home/navbar/Contacts/Contacts';
import Blog from './components/Home/navbar/Blog/Blog';
import Services from './components/Home/navbar/Services/Services';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    children : [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/service',
        element:<Services></Services>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/contact',
        element:<Contacts></Contacts>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
