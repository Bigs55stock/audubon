import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {Route, Routes} from 'react-router-dom'
import Home from './Home';
import birds from './Data';
import Showpage from './ShowPage';

function App() {
  return (
    <div>
      <Header />
      <main>
      <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/showpage/:index" element={ <Showpage />} />
          </Routes>
      </main>
    
    </div>
  );
}

export default App;
