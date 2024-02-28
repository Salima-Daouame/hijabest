import './App.css';
import NavbarDesk from './component/NavbarDesk';
import About from './component/About';
import Home from './component/Home';

function App() {

  return (
    <div className='dark:text-white dark:bg-slate-900 duration-100'>
      <NavbarDesk />
      <Home />
      <About />
    </div>
  )
}

export default App;

