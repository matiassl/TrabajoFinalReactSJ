import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import { ItemsProvider } from './contexts/ItemsContext';
import Categoria from './pages/Categoria/Categoria';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Compra from './pages/Compra/Compra';
const App = () => {
  return (
    <ItemsProvider>    
    <Router>       
      <div className="App">
        <Header />
         <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/item/:id"  element={<ItemDetail/>} />
               <Route path="/categoria/:cat"  element={<Categoria/>} />
               <Route path="/shoppingcart" element={<ShoppingCart />}/>
               <Route path="/compra" element={<Compra />}/>
        </Routes> 
      </div>
    </Router>
    </ItemsProvider>
  );
}

export default App;
