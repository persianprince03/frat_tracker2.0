
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
// import {Member} from "./routes/members/getMember";
// import Contact from "./main-components/memebrCard";
// import Flow from "./routes/familyTree";
import jsonGen from "./jsonGenerator/jsonGen"
import FamilyTree from "./routes/familyTree/familyTree";

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
    //     element: <Contact/>
    // }
    {
        path:'/main/tree',
        element: <FamilyTree />
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <RouterProvider router={router} />
);