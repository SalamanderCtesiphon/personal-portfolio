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
      <Sticky enabled={true} bottomBoundary={3600}><Header /></Sticky>
      <Hero />
      <WorkSection />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
