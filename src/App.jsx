import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import ChatButton from "./components/ChatButton";


// Lazy load components
const Head = lazy(() => import("./components/Head"));
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Head />
        <div className="font-poppins">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <ChatButton />
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
