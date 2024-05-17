import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'pages/Home'
import AboutMe from 'pages/AboutMe'
import Footer from 'components/Footer';
import Error404 from 'pages/404';

function AppRoutes() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sobremim' element={<AboutMe />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
