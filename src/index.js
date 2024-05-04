
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import SignInSide from './routes/login/login';
import MainPage from './routes/main/main_page';
import AddMember from './routes/members/addMember';
import Transactions from './routes/transactions/transactions';

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignInSide/>,
    },
    {
        path:'/main',
        element: <MainPage/>
    },
    {
        path:'/main/add_member',
        element: <AddMember/>,
    },
    {
        path:'/main/transactions',
        element: <Transactions />
    },
    // {
    //     path:'/main/roster',
    //     element:member()
    // }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouterProvider router={router} />
);