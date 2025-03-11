import './App.css';
import Navbar from './components/Navbar/Navbar';
// import AppRoutes from './components/routes/AppRoutes';
import Home from "../src/pages/Home/Home"
function App() {
  return (
    <>
      <Navbar />
      {/* <AppRoutes /> */}
      <Home/>
    </>
  );
}

export default App;
