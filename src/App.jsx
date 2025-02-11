import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";



// Lazy load components
const ChatButton = lazy(() => import("./components/ChatButton"));
const ContactDetail = lazy(() => import("./components/ContactDetail"));
const Head = lazy(() => import("./components/Head"));
const MyServices=lazy(()=> import("./components/MyServices"));
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
          {/* <MyServices /> */}
          <ContactDetail />

          <Contact />
          <ChatButton />
          <Footer />
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
