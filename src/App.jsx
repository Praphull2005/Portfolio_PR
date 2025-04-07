import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Certification from './Components/Certification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
      <ToastContainer />
      <Header />
      <About />
      <Project />
      <Skills />
      <Certification />
      <Footer />
    </div>
  );
}

export default App;