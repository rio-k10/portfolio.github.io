import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import './App.css';

function App() {
  <div className='app'>
    <aside className='sidebar'>
      <h2 className='brand'>My Portfolio</h2>
      <nav>
        <NavLink
          to='/'
          end
          className={({ isActive }) => (isActive ? 'nav active' : 'nav')}
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'nav active' : 'nav')}
        >
          About
        </NavLink>
        <NavLink
          to='/work'
          className={({ isActive }) => (isActive ? 'nav active' : 'nav')}
        >
          Work
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) => (isActive ? 'nav active' : 'nav')}
        >
          Contact
        </NavLink>
      </nav>
    </aside>

    <main className='content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </main>
  </div>;
}

export default App;
