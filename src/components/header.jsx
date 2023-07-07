import React from 'react'
import { BiPhoneCall, BiMailSend } from 'react-icons/bi'
import { HiOutlineInboxIn } from 'react-icons/hi'
import { VscAccount } from 'react-icons/vsc'
import { TiTicket } from 'react-icons/ti'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.png'
const header = () => {
  const location = useLocation();
  return (
    <>
      <header className='header-top-strip p-2 shadow-sm'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <p>The cheapest Fight rates</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+445445485415">Call us +26595965965</a>
              </div>
              <div>
                <Link><BiPhoneCall className='fs-4 mx-4' /></Link>
                <Link><BiMailSend className='fs-4 mx-4' /></Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <Link to='/'>
                <img src={logo} alt="" className='img-fluid logo' />
              </Link>
            </div>
            <div className="col-3 d-flex align-items-center ">
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">All</span>
                <input type="text" className="form-control p-2" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className='input-group-text' id="basic-addon2">Search</button>
              </div>
            </div>
            <div className="nav-links col-4 d-flex align-items-center justify-content-between text-center">
              <Link to={'/'} className={location.pathname === '/' ? 'active' : 'inactive'}>Home</Link>
              <Link to={'shop'} className={location.pathname === '/shop' ? 'active' : 'inactive'}>Shop</Link>
              <Link to={'flight'} className={location.pathname === '/flight' ? 'active' : 'inactive'}>Flights</Link>
              <Link to={'blog'} className={location.pathname === '/blog' ? 'active' : 'inactive'}>Blog</Link>
              <Link to={'about'} className={location.pathname === '/about' ? 'active' : 'inactive'}>About</Link>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-arround">
              <Link to={'wishlist'} className='d-flex'><HiOutlineInboxIn className='fs-3 mx-2' /><span>Wishlist</span></Link>
              <Link to={'account'} className='d-flex'><VscAccount className='fs-3 mx-2' /><span>Account</span></Link>
              <Link to={'tickets'} className='d-flex'><TiTicket className='fs-3 mx-2' /><span>Tickets</span></Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default header