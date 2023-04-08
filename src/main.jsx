import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     // errorElement: <ErrorPage />
//   },
//   {
//     path: "/about",
//     element: <About></About>
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>
//   }
  
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)

      },
      {
        path: "contact",
        element: <Contact></Contact>
      }
    ] 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
