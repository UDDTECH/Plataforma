import { ThemeProvider } from "./Providers/ThemeProvider";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import "./styles/globals.css";

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
