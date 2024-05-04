
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,

} from "react-router-dom";
import SignInSide from "./routes/login";
import addMember from "./routes/addMember";
import Main_Page from "./routes/main_page";
import transactions from "./routes/tranasaction";
import member from "./routes/getMember"
import Example from "./routes/AddMembersRewrite";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <SignInSide/>,
    // },
    {
        path:'/',
        element: <Main_Page/>
    },
    {
        path:'/main/add_member',
        element:Example(),
    },
    {
        path:'/main/transactions',
        element:transactions()
    },
    // {
    //     path:'/main/roster',
    //     element:member()
    // }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
