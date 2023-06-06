import React from 'react';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header_Footer/Header';
import Footer from './components/Header_Footer/footer';
import SignIn from './components/Signin'

const Rouite = (props)=>{
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
     <Route path="/sign_in" exact element={<SignIn/>}/>
      <Route path="/" exact element={<Home/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  );
}

export default Rouite;
