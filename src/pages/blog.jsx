import React from 'react'
import blog2 from '../assets/images/blogImages/blog2.jpg'
const blog = () => {
  return <>
  <section className="blog-wrapper">
    <div className="container-xxl">
      <div className="row">
     <div className="text-center">
      <h1>#Read More</h1>
      <p>Get to Know What our clients Saying</p>
     </div>
      </div>
    </div>
  </section>
  <section className="blog-details p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="text-center">
          <h1>
            EXPLORE MORE ON OUR LIBRARY
          </h1>
          <p>Why People wants to Travel with us</p>
        </div>
        <div className="card blog-details-page">
          <div className='p-4 d-flex'>
            <div className="col-4">
          <img src={blog2} alt="" 
          className='img-fluid img-rounded-start' />
            </div>
          <div className="card-body col-8 mt-3">
            <span>Hot Deals</span>
            <h3 className="card-title">
              Buy One Get One Free
            </h3>
            <p>The Best Ticket Prices in Our Plans</p>
            <button className="btn button-deals mt-2">
              Learn More
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
}

export default blog