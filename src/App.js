import {Router} from '@reach/router';
import './App.css';

import Customize from './components/Customize';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';

function App() {
  return (
    <Router className='text'>
      <Customize path='/:word/:text/:color'/>
      <Home path='/home'/>
      <Number path='/:num'/>
      <Word path='/:word'/>
    </Router>
  );
}

export default App;
