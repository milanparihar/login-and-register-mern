// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<h1> this is home page </h1>}/>
          <Route path="/about" element={<h1> thiis is about page </h1>}/>
          <Route path="/contact" element={<h1> this is contact page </h1>}/>
          <Route path="/logout" element={<h1> this is logout page </h1>}/>
          <Route path="/signup" element={<SignUp/>}/>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
