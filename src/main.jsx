import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Product from './components/Product.jsx';
import Pricing from './components/Pricing.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import { NotFound } from './components/NotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element= {<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='about/:id' element={<Product/>}/>
      <Route path='pricing' element={<Pricing/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
