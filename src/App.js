import React from 'react';
import './App.scss';
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Navbar from "./components/Navbar.jsx";


const App = () => {
  return (
    <div className='app-wrapper container'>
        <div className="row justify-content-between">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    </div>
  );
}


export default App;
