import React from 'react'
import {Link} from 'react-router-dom'
import {AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai'


const footer = () => {
  return <>
  <footer className='footer'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-3 d-flex flex-column">
          <h3 className='mb-3 mt-4'>Contact us</h3>
          <div className="footer-details">
            <p><b>Address:</b>Johar Town, Lahore</p>
            <p><b>Phone:</b><a href="tel:+445445485415">Call us +26595965965</a></p>
            <p><b>Address:</b>Johar Town, Lahore</p>
            <p><b>Address:</b>Johar Town, Lahore</p>
            <p><b>Address:</b>Johar Town, Lahore</p>
            <p><b>Follow us</b></p>
            <div className="social-icons mb-3 justify-content-arround">
              <Link className=''><AiFillTwitterCircle/></Link>
              <Link className=''><AiFillFacebook/></Link>
              <Link className=''><AiFillInstagram/></Link>
              <Link className=''><AiFillLinkedin/></Link>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex flex-column">
          <h3 className='mb-3 mt-4'>Contact us</h3>
          <div className="footer-details">
            <p><b>Address:</b>Johar Town, Lahore</p>
            <p><b>Phone:</b><a href="tel:+445445485415">Call us +26595965965</a></p>
            <p><b>Address:</b>Johar Town, Lahore</p>
            <p><b>Address:</b>Johar Town, Lahore</p>
            <p><b>Address:</b>Johar Town, Lahore</p>
          </div>
        </div>
        <div className="col-3 d-flex flex-column">
          <h3 className='mb-3 mt-4'>Contact us</h3>
          <div className="footer-details">
            <p><b>Address:</b>Johar Town, Lahore</p>
            <p><b>Phone:</b><a href="tel:+445445485415">Call us +26595965965</a></p>
            <p><b>Address:</b>Johar Town, Lahore</p>
            <p><b>Address:</b>Johar Town, Lahore</p>
            <p><b>Address:</b>Johar Town, Lahore</p>
          </div>
        </div>
        <div className="col-3 d-flex flex-column">
          <h3 className='mb-3 mt-4'>Contact us</h3>
          <div className="footer-details mb-5">
            <p><b>Address:</b>Johar Town, Lahore</p>
            <p><b>Phone:</b><a href="tel:+445445485415">Call us +26595965965</a></p>
            <p><b>Address:</b>Johar Town, Lahore</p>
            <p><b>Address:</b>Johar Town, Lahore</p>
            <p><b>Address:</b>Johar Town, Lahore</p>
          </div>
        </div>
      </div>
      <hr/>
      <div className="row d-flex justify-content-between">
       <div className="col-3 mb-3">
        <p>&copy; Developed by Amtul Zahra 2023</p>
       </div>
       <div className="col-3 d-flex justify-content-between">
        <Link className='text-black'>Privacy Policy</Link>
        <Link className='text-black'>Terms of Use</Link>
        <Link className='text-black'>Contact Me</Link>
       </div>
      </div>
    </div>
  </footer>
  </>
}

export default footer