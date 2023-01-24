import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Pagination from './components/Pagination/Pagination';

function App() {
  
  return (
   <Router>
     <Navigation />
     {/* <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        maxLength={7}
        setCurrentPage={setCurrentPage}
      /> */}
      </Router>
    
  );
}

export default App;
