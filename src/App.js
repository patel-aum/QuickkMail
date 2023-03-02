import React, { useState, useEffect } from "react";
import "./App.css";
import Massmailer from "./components/massmailer";
import Sidebar from "./components/Sidebar";
import "./components/lists";
import AddContact from "./components/AddContact";
import  Settings from "./components/settings"
import Home from "./components/home"
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import { v4 as uuid } from "uuid";
import ContactList from "./components/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))|| []
  );
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(()=>{
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
    if(retrieveContacts) setContacts(retrieveContacts);
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
    <div className="Title">
<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    <h1>Quickk Mail</h1></div>
    <div className="App">
    <Router>
      <Routes>
        <Route exact path='/' exact0 element={<Home />} />
        <Route exact path='/settings' exact1 element={<Settings />} />
        <Route exact path='/lists' exact2 element={<div><AddContact addContactHandler={addContactHandler}/><ContactList contacts={contacts} getContactId={removeContactHandler}/></div>}/>
        <Route exact path='/massmailer' exact3 element={<Massmailer />} />
    </Routes>
    </Router>
    </div>
   </div>
  );
}

export default App;
