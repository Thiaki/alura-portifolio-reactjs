import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import DefaultPage from 'components/DeafaultPage';
import Home from 'pages/Home'
import AboutMe from 'pages/AboutMe'
import Post from 'pages/Post';
import Error404 from 'pages/404';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path='sobremim' element={<AboutMe />} />
          <Route path='posts/:id' element={<Post />} />
        </Route>
        
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
