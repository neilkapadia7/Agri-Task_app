import SideNav from './components/SideNav'
import HeroSection from './components/HeroSection'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <SideNav />
        <HeroSection />
      </div>
    </Router>
  );
}

export default App;
