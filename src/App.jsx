import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import Shop from './pages/shop'
import Blog from './pages/blog'
import Flight from './pages/flight'
import About from './pages/about'
import Wishlist from './pages/wishlist'
import Account from './pages/account'
import Tickets from './pages/tickets'
function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='flight' element={<Flight/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='wishlist' element={<Wishlist/>}/>
      <Route path='account' element={<Account/>}/>
      <Route path='tickets' element={<Tickets/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
