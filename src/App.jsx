import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/Dashboard';

function App() {
  return (
    <>
      <div>Hello World</div>
      <LoginPage />
      <DashboardPage />
    </>
  );
}

export default App;
