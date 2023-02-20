import React from 'react'
import data from '../data/Data'
import ServiceCard from './ServiceCard'
const Service = () => {
  return (
    <>
   <div className="first d-flex flex-column justify-content-center align-items-center">
      <p className='text-white fw-bolder fs-1 '>All Services</p>
      <div className="box p-3 ">
        Home // <span>Services</span>
      </div>
    </div>
    <div className="second">
      <div className="container my-5">
        <div className="row g-5">
        {data.map((item, index) => {
            return (
              <ServiceCard
                key={index}
                title={item.title}
                img1={item.img}
                img2={item.img}
              />
            );
          })}
        </div>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div className="btn my-btn rounded-pill p-3 fw-bolder fs-5">
            Other's Service
          </div>
        </div>
      </div>
    </div>
    <div className="third py-5">
     <div className="container">
     <div className="d-flex justify-content-between text-white">
        <h2>Stay connect with us, get <br /> daily & weekly update.</h2>
        <button type="button" class="btn mybtn rounded-pill text-white">Subscribe Now <i class="fa-solid fa-angles-right"></i></button>
      </div>
     </div>
    </div>
    </>
  )
}

export default Service