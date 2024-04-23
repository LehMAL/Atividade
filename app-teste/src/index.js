import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import FormPage from './Pages/FormPage';
import AboutUsPage from './Pages/AboutUsPage';
import NaviBarComponent from './Components/NaviBarComponent';


const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
  {
    path: "/us",
    element: <AboutUsPage />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <NaviBarComponent/>
    <RouterProvider router={router} />
  </React.StrictMode>
);
