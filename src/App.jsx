import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <NavTabs />
      <main className="mx-3 mainContainer">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
