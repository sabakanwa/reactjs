import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes , Route , Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import Page404 from './Pages/Page404'
import NavigationBar from './Componenets/NavigationBar'
import FooterSection from './Componenets/FooterSection'
import CategoryPage from './Pages/CategoryPage'
import ProductPage from './Pages/ProductPage'

function App() {

  const [user,setUser]= useState(true)
  return (
   <>



   <NavigationBar/>

   {
    user 
    ?  
    (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/products/:productID" element={<ProductPage/>} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/products/category/:categoryName" element={<CategoryPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
    ) 
    : 
    (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/login" replace={true} />} />
    </Routes>
    )
   }
     
   <FooterSection/>
   </>
  )
}

export default App