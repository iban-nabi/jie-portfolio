import Navigation from "./components/Navigation";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      <Navigation />
      <Hero />
      <AboutMe />
      <TechStack />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
