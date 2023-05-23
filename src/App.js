import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import WorkSection from './components/WorkSection';
import Sticky from 'react-stickynode';


function App() {

  return (
    <div className="App">
      <Sticky enabled={true} bottomBoundary={3600} innerZ={6}><Header /></Sticky>
      <Hero />
      <Info />
   
      <WorkSection />
      <div className='spacer'></div>
      <Footer />
    </div>
  );
}

export default App;
