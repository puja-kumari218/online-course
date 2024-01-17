import './App.css';
import Header from './Components/Header/Header';
import MainContainer from './Components/MainContainer/MainContainer';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="body-container">
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={ <MainContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
