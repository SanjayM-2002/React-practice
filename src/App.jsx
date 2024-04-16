import React, { Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LoginPage from './components/LoginPage';

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Task01 from './components/Task01';
const DashboardComponent = React.lazy(() =>
  import('./components/DashboardPage')
); //syntax for lazyloading

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderBar />
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/dashboard'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <DashboardComponent />
              </Suspense>
            }
          />
          <Route path='/' element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const HeaderBar = () => {
  const navigate = useNavigate(); // useNavigate() hook can only be used inside BrowserRouter, hence this HeaderBar is used inside <BrowserRouter>
  return (
    <>
      <div
        style={{
          width: '100%',
          backgroundColor: 'lightblue',
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'space-around',
          justifyContent: 'space-around',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <h2>Top Bar</h2>
        <button
          onClick={() => {
            navigate('/dashboard');
          }}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            navigate('/login');
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </button>
      </div>
    </>
  );
};

export default App;
