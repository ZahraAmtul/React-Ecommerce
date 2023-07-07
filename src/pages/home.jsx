import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedProducts from '../components/featuredProducts'

const Home = () => {
  return <>
  <section className='banner'>
    <div className="container-xxl">
      <div className="row">
        <div className="banner-details d-flex flex-column align-items-start justify-content-center">
          <div className='mx-5'>
          <span className='shadow p-3'>Tickets in offer!!</span>
          <h1>Super Value Deals</h1>
          <h2>On all products</h2>
          <p>Save more with Flights</p>
          <Link className='button-link'>Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="featured-products">
    <div className="container-xxl">
      <div className="row">
        <div className="text-center">
          <h1>Our Featured Products</h1>
          <p> All Tickets 
          </p>
        </div>
            <FeaturedProducts/>
      </div>
    </div>
  </section>
  </>
}

export default Home