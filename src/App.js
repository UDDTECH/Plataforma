import { ThemeProvider } from "./Providers/ThemeProvider";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/pages/HomePage";
import LogIn from "./Components/pages/LogIn";
import SignUp from "./Components/pages/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/globals.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
