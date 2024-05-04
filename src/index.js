
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import SignInSide from './routes/login/login';
import Main_Page from './routes/main/main_page';
import AddMember from './routes/members/addMember';
import Transactions from './routes/transactions/transactions';

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignInSide/>,
    },
    {
        path:'/main',
        element: <Main_Page/>
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