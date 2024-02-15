import './App.css';
import CartDetails from './components/CartDetails';
import ItemDetails from './components/ItemDetails';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
 <Navbar/>
 <Routes>
  <Route path='/home' element={<CartDetails/>}/>
  <Route path='/items' element={<ItemDetails/>}/>
 </Routes>
    </div>
  );
}

export default App;
