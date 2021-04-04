import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Whoops404 from "./pages/Whoops404";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Table from './components/Table';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/portifolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/table" element={<Table />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;