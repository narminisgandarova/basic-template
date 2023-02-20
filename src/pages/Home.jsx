import React from 'react'
import hero from '../assets/img/hero.webp'
import Button from 'react-bootstrap/Button';
import hero1 from '../assets/img/right-arrow.webp'
const Home = () => {
  return (
  <>
   <div className="container">
    <div className="row">
     <div className="col-12 col-sm-6 col-md-6">
      <div className="text d-flex justify-content-center  ">
      <div className="d-flex">
      <div className="box ">
          <p >In a few minutes</p>
        </div>
          <img className='ms-3' src={hero1} alt="" />
      </div>
        <h2>Start <span>& Manage</span> <br /> your best choice startup.</h2>
        <p>The business standard to since the printer took a gallery scrambled it to make specimen book.</p>
        <Button variant="primary" className='rounded-pill mybtn fw-bold'>All Service's <i class="fa-solid fa-angles-right ms-3"></i></Button>
      </div>
     </div>
     <div className="col-12 col-sm-6 col-md-6 ">
       <img src={hero} className="hero" alt="" />
     </div>
    </div>
   </div>
  </>
  )
}

export default Home