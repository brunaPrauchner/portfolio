import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Error from './pages/Error/Error'
import Progress from './pages/Progress/Progress'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/portfolio' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/progress' element={<Progress />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}
export default App;
