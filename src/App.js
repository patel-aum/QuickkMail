import React from "react";
import "./App.css";
import Massmailer from "./components/massmailer";
import Sidebar from "./components/Sidebar";
import "./components/lists";
import AddContact from "./components/AddContact";
import  Settings from "./components/settings"
import Home from "./components/home"
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
function App() {
  return (
    <div>
    <div className="Title">
<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <h1>Quickk Mail</h1></div>
    <div className="App">
      
   
    <Router>
      <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route exact path='/settings' exact element={<Settings />} />
        <Route exact path='/lists' exact element={<AddContact />} />
        <Route exact path='/massmailer' exact element={<Massmailer />} />
        

    </Routes>
    </Router>
    </div>
   </div>
  );
}

export default App;
