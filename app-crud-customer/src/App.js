import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header/Header";
import AllRoutes from "./components/router/AllRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="container-fluid px-0">
          <AllRoutes/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
