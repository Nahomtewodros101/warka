import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Properties } from "./components/Properties";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden w-full">
        <Header />
        <Hero />
        <Properties />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
