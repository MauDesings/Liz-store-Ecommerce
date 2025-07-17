import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar/NavBar'
import AppHome from './pages/home/AppHome'
import AppProducts from './pages/products/AppProducts'
import AppContact from './pages/contact/AppContact'
import Footer from './components/footer/Footer'
import AppCart from './pages/cart/AppCart'
import AppSingleProduct from './pages/singleProduct/AppSingleProduct'

function App() {
  const greeting = 'Bienvenidos';
  return (
    <>
        <header className='header'>
          <NavBar />
        </header>
        <main>
            <section className='section'>
                <div className='container'>
                  <Routes>
                    <Route exact path="/" element={<AppHome greeting={greeting} />} />
                    <Route exact path="/productos" element={<AppProducts />} />
                    <Route exact path="/contacto" element={<AppContact />} />
                    <Route exact path="/cart" element={<AppCart />} />
                    <Route exact path="/singleProduct/:ID" element={<AppSingleProduct />} />
                  </Routes>
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default App
