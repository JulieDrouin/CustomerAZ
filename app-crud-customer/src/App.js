import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/Header/Header";

const App = () => {
  const titre= "CLIENTS";
  return (
    <BrowserRouter>
      <div className="App">
        <Header titre={titre}/>
        <div className="container-fluid px-0">
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
