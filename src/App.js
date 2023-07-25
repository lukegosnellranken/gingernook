import React from 'react';
import Nav from './components/navbar/Nav';
import Background from './components/background/background';
import './App.css';
import ContentArea from './components/content-area/ContentArea';

function App() {
  return (
    <div id='appDiv'>
      <Nav/>
      <Background/>
      <ContentArea/>
    </div>
  );
}

export default App;
