
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Products from './Pages/Products';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route element={ <Products />} path='/'> </Route>
          <Route element={ <Cart />} path='/cart'> </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
