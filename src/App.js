import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Homepage from './components/Homepage/Homepage';
import MovieDetails from './components/MovieDetails/MovieDetails';
// import MovieList from './components/MovieList/MovieList';
import Booking from './components/Booking/Booking';
import Navbar from './components/Navbar/Navbar';

export const UserContext = createContext();

function App() {
  const [movie, setMovie] = useState([]);
  return (
    <div className="App">
      <UserContext.Provider value={[movie, setMovie]}>
        <Router>
          <Navbar />

          <Routes>
            
            <Route exact path="/" element={<Homepage />}></Route>
            <Route path="movie/:id" element={<MovieDetails />}></Route>
            <Route path="/booking" element={<Booking />}></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route>
          </Routes>

          {/* <Footer /> */}
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
