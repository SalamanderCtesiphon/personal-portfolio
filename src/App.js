import './App.css';
import Header from './components/Header';
import github from './icons/github-original-wordmark.svg'
import linked from './icons/linkedin-original.svg'
import twit from './icons/twitter-original.svg'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='icon-container'>
      <a href='https://www.linkedin.com/in/shannon-brookshire-817577265/' ><img className='icons' alt='linked in link'src={linked}></img></a>
      <a href="https://github.com/SalamanderCtesiphon/" ><img className='icons' alt='git hub link' src={github}></img></a>
      <a href='https://twitter.com/Shannon99535365'><img className='icons' alt='twitter link' src={twit} ></img></a>
      </div>
    </div>
  );
}

export default App;
