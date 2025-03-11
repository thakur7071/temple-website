import './App.css';
import Navbar from './components/Navbar/Navbar';
// import AppRoutes from './components/routes/AppRoutes';
import Home from "../src/pages/Home/Home"
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      {/* <AppRoutes /> */}
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
