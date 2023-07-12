import './output.css';

import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Resume from './components/Resume';

import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <Routes>
      
      <Route path="/resume" element={<Resume />}/>

      <Route path="/projects" element={<Projects/>}/>

      <Route path="aboutme" element={<AboutMe />}/>
      
      <Route exact path="/" element={<LandingPage />} />
      
    </Routes>

  );
};

export default App;
