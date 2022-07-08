import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar';
//pages
import SearchPage from './components/pages/SearchPage';
import WatchListPage from './components/pages/WatchListPage';
import OriginalsPage from './components/pages/OriginalsPage';
import MoviesPage from './components/pages/MoviesPage';
import SeriesPage from './components/pages/SeriesPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/watchlist" element={<WatchListPage/>}/>
          <Route path="/originals" element={<OriginalsPage/>}/>
          <Route path="/movies" element={<MoviesPage/>}/>
          <Route path="/series" element={<SeriesPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
