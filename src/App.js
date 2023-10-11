import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Placement from './pages/Placement/Placement';
import Contact from './pages/Contact/Contact';
import Courses from './pages/Courses/Courses';
import NoPage from './pages/NoPage/NoPage';
import Register from './pages/Register/Register';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Placement" element={<Placement/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Courses" element={<Courses/>}/>
        <Route path='Register' element={<Register/>} />
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
