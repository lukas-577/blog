import React from 'react'
import { Routes, Route, createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import Post from '../components/Post'


const router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "post",
                element: <Post></Post>
            },
            {
                path: "*",
                element: <NotFound></NotFound>,
            },
        ]
    }
])

export default router