import React from 'react'
import project2 from '../assets/img/project-wide-2.webp'
import project1 from '../assets/img/project-wide-1.webp'
import project6 from '../assets/img/project-wide-3.webp'
import project3 from '../assets/img/project-square-1.webp'
import project4 from '../assets/img/project-square-2.webp'
import project5 from '../assets/img/project-square-3.webp'
const Project = () => {
  return (
    <div>
        <div className="first d-flex flex-column justify-content-center align-items-center">
      <p className='text-white fw-bolder fs-1 '>All Projects</p>
      <div className="box p-3 ">
        Home // <span>Services</span>
      </div>
    </div>
    <div className="container ">
        <div className="box d-flex justify-content-center align-items-center my-3">
              <p>All  <span className='mx-3'>// </span></p>
              <p>Branding <span className='mx-3'>// </span> </p>
              <p>Marketing <span className='mx-3'>// </span> </p>
              <p>Corporate  <span className='mx-3'>// </span></p>
              <p>Agency </p>
        </div>
        <div className="row g-0 myrow">
            <div className="col-12 col-sm-6 col-md-6">
                <img src={project1} alt="" />
            </div>
            <div className="col-12 col-sm-6 col-md-6">
                <img src={project2} alt="" />
            </div>
        </div>
        <div className="row mt-3 g-0 myrow">
            <div className="col-12 col-sm-6 col-md-4">
                <img src={project3}  alt="" />
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <img src={project4} alt="" />
            </div>
            <div className="col-12 col-sm-6 col-md-4">
                <img src={project5} alt="" />
            </div>
        </div>
        <div className="row g-0 myrow my-3">
            <div className="col-12 col-sm-6 col-md-6">
                <img src={project6} alt="" />
            </div>
            <div className="col-12 col-sm-6 col-md-6">
                <img src={project2} alt="" />
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
    </div>
  )
}

export default Project