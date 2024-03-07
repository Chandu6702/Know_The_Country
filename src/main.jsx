import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='' element={<App/>}>
    <Route path='/' element={<Home/>}></Route>
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
