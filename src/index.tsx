import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { CreateAccountDetailsPage } from './pages/create-account-details-page/CreateAccountDetailsPage'
import { CreateAccountPage } from './pages/create-account-page/CreateAccountPage'
import { HomePage } from './pages/home-page/HomePage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <CreateAccountPage />,
    },
    {
        path: '/account-details',
        element: <CreateAccountDetailsPage />,
    },
    {
        path: '/home',
        element: <HomePage />,
    },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
