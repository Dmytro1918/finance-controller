import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import AddNewWallet from './pages/addNewWalletPage/AddNewWallet.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './pages/errorPage/ErrorPage.tsx';
import WalletCreationPage from './pages/walletPage/WalletCreationPage.tsx';
import { WalletProvider } from './components/context/walletContext.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddNewWallet/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:'/new',
    element:<WalletCreationPage/>,
    errorElement:<ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WalletProvider>
      <RouterProvider router={router}/>
    </WalletProvider>
  </React.StrictMode>,
)
