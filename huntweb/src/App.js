import React from 'react';
import Header from './Components/Header';
import "./styles.css";
import Main from './pages/main';
import Routes from './routes';


const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
