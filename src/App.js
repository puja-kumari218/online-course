import './App.css';
import Header from './Components/Header/Header';
import {Routes, Route} from "react-router-dom";
import MainContainer from './Components/MainContainer/MainContainer';


function App() {
  return (
    <div className="body-container">
      <div className="App">
      <Header />
      <MainContainer />
    </div>
    </div>
  );
}

export default App;
