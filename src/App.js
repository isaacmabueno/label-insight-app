import React from 'react';
import './App.css';
import MainLayout from './Components/MainLayout';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
        <div className="Container">
          <MainLayout />
      </div>
    </div>
  );
}

export default App;
