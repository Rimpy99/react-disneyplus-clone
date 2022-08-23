import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//pages
import HomePage from './components/pages/Home/HomePage'
import SearchPage from './components/pages/Search/SearchPage';
import WatchListPage from './components/pages/WatchList/WatchListPage';
import OriginalsPage from './components/pages/Originals/OriginalsPage';
import MoviesPage from './components/pages/Movies/MoviesPage';
import SeriesPage from './components/pages/Series/SeriesPage';
import Details from './components/pages/Details/Details';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/react-disneyplus-clone" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/search" element={<SearchPage/>}/>
            <Route path="/watchlist" element={<WatchListPage/>}/>
            <Route path="/originals" element={<OriginalsPage/>}/>
            <Route path="/movies" element={<MoviesPage/>}/>
            <Route path="/series" element={<SeriesPage/>}/>
            <Route path="/details/:id" element={<Details/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
