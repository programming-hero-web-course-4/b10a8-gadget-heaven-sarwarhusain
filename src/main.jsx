import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Statistics from './components/Statistics/Statistics';
import DashBoard from './components/DashBoard/DashBoard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'details/:product_id',
        element: <Details></Details>,
        loader: () => fetch('/productsData.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader:()=> fetch('/productsData.json')
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>,
        loader: () => fetch('/productsData.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
