import logo from './logo.svg';
import './App.css';
import Home from './home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Product from './product';
import Order from './order';

function App() {
  return (
//  <Home/>
      <Router>
        
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route exact path='/Product' element={<Product />}></Route>
            <Route exact path='/OrderS' element={<Order />}></Route>
          </Routes>
      </Router>
  );
}

export default App;
