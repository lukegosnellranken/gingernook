import React from 'react';
import Nav from './components/navbar/Nav';
import Background from './components/background/background';
import './App.css';
import ContentArea from './components/content-area/ContentArea';

function App() {
  // fetch('http://localhost:1337/api/articles')
  //   .then(res => {return res.json()})
  //   .then(data => {console.log(data)})
  //   .catch(error => {console.log(error)});
  return (
    <div id='appDiv'>
      <Nav/>
      <Background/>
      <ContentArea/>
    </div>
  );
}

export default App;
