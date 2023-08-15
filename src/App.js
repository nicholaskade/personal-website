import './output.css';

import Resume from './components/Resume';
import Footer from './components/Footer';

import { useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();

  return (
    <>
      <div id="resume-header-container">
        <h1 className="header-text" onClick={() => nav("/")}>Nicholas Nip</h1>
        <h1 className="typing-effect-text">Full-Stack Software Engineer</h1>
      </div>
    
      <Resume />
      <Footer />
    </>
  );
};

export default App;
