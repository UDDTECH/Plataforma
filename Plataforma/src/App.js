import { ThemeProvider } from "./Providers/ThemeProvider";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/pages/HomePage";
import "./css/globals.css";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Navbar />
      <main className="min-h-screen">
        <HomePage />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
