import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Tabs from './components/Tabs';
import Repos from './components/Repos';

function App() {
  return (
    <>
      <Navbar />
      <div className="github-page-wrapper">
        <div className="profile">
          <Profile />
        </div>
        <div className="repos">
          <Tabs />
          <Repos />
        </div>
      </div>
    </>
  )
}

export default App;
