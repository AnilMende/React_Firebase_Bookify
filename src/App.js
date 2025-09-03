import { Routes, Route } from "react-router-dom";
// Components
import MyNavbar from "./Components/Navbar";
// Pages
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ListingPage from "./Pages/List";


function App() {
  return (
    <div>
      <MyNavbar/>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/book/list" element={<ListingPage/>}/>
      </Routes>
    </div>

  );
}

export default App;
