import './App.css';
import terry from "./images/terry davis big.jpg"

function App() {
  return (
    <div className="App">
      <div className='banner'>
        
      </div>
      <div className='photo-container'>
        <img src={terry} alt='me'></img>
      </div>
      <div className='name'>Shannon Brookshire</div>
      <h1 className='intro'>About me</h1>
      <p className='intro-para'>Welcome to my profile! I am an enthusiastic and dedicated entry-level web developer with a passion for creating dynamic and user-friendly websites. With a solid foundation in HTML, CSS and JavaScript - not to mention ReactJS and firebase. I am excited to apply my skills to bring innovative ideas to life. As a detail-oriented individual, I thrive in fast-paced environments and enjoy collaborating with cross-functional teams to deliver high-quality solutions. I am constantly learning and staying up-to-date with the latest web development technologies and trends to ensure I am providing cutting-edge solutions. </p>
    </div>
  );
}

export default App;
