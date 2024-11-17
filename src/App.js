import logo from './logo.svg';
import './App.css';
import UserList from './components/PersonList';
import { Routes, Route, BrowserRouter, NavLink, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import PersonList from './components/PersonList';
import PersonDetails from './components/PersonDetails';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Axios and Navigation</h1>
        <BrowserRouter>
          <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about?college=GBC">About</NavLink>
            <NavLink to="/contact/Liz">Contact</NavLink>
            <NavLink to="/personlist">User List</NavLink>
          </nav>

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact/:name" element={<Contact />} />
            <Route path="/personlist" element={<PersonList />} />
            <Route path="/person/:personid" element={<PersonDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}