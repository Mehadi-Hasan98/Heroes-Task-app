import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Calender from "./components/Calender/Calender";
import Home from "./components/Home/Home";
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="calender" element={<Calender/>}></Route>
        <Route path="about" element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
