import logo from './logo.svg';
import './App.css';
import WithSubnavigation from './components/Navbar';
import Carousel from './components/carousel-home';
import {Categories} from './components/categories';

function App() {
  return (
    <div className="App">
      <WithSubnavigation/>
      <Carousel/>
      <Categories/>
    
    </div>
  );
}

export default App;
