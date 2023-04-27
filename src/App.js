import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import WorkSection from './components/WorkSection';


function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <WorkSection />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
