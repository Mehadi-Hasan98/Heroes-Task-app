import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from "./components/About/About";
import Calender from "./components/Calender/Calender";
import CompletedTasks from "./components/CompletedTasks/CompletedTasks";
import Home from "./components/Home/Home";
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import Todo from "./components/ToDo/Todo";
import UpdateTasks from "./components/UpdateTasks/UpdateTasks";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="updatetasks/:id" element={<UpdateTasks/>}></Route>
        <Route path="completedtasks" element={<CompletedTasks/>}></Route>
        <Route path="todo" element={<Todo/>}></Route>
        <Route path="calender" element={<Calender/>}></Route>
        <Route path="about" element={<About/>}></Route>
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
