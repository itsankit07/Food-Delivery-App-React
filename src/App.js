import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

const About = lazy(()=>import("./components/About"))

import {createBrowserRouter,Outlet,Router,RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./components/UserContext";
import { useState,useEffect } from "react";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const App = () =>{

    const[userName,setUserName] = useState();
    
    useEffect(()=>{
        //fetch api with data
        const data = {
            name: "Ankit Singh"
        }
        setUserName(data.name);
    },[])
    
    
   return (
    <div>
        <Provider store = {appStore}>
        <UserContext.Provider value = {{loggedInUser:userName,setUserName}}>
        <Header/>
        <Outlet/>
        </UserContext.Provider>
        </Provider>
    </div>
)}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [ 
        {
            path: "/",
            element: <Body/>,
        },    
        {
            path: "/about",
            element : <Suspense fallback = {<Shimmer/>}> <About/> </Suspense>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
           path: "/restaurants/:resId",
           element: <RestaurantMenu/>
        },
        {
            path: "/cart",
            element:<Cart/>
        }],
        errorElement: <Error/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
