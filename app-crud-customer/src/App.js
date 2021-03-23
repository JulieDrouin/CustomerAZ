import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header/Header";
import AllRoutes from "./components/router/AllRoutes";

const App = () => {
  const titre= "CLIENTS";
  return (
    <BrowserRouter>
      <div className="App">
        <Header titre={titre}/>
        <div className="container-fluid px-0">
          <AllRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
