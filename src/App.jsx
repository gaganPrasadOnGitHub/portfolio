import './App.css';
import BackgroundModel from './components/Background/BackgroundModel';
import Watermark from './components/Background/Watermark';
import Footer from './components/Footer';
import { Landing } from './components/Landing';

function App() {
  return (
    <>
      <BackgroundModel />
      <Watermark />
      <Landing />
      <Footer />
    </>
  );
}

export default App;
