import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plan from './Plan/Plan';
import Testimonials from './Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plan/>
      <Testimonials/>
      <Join/>
      <Footer/>

    </div>
  );
}

export default App;
