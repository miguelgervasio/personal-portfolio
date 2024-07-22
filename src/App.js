import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>

      <NavBar />

      <Banner />

      <Projects />

      <Footer />

    </>
  );
}

export default App;
