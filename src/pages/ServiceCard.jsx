import React from 'react'

const ServiceCard = (props) => {
  return (
     <div className="col-12 col-sm-6 col-md-4">
        <div className="card">
        <img src={props.img1} className="card-img-top img1 rounded-4" alt="..." />
        <img src={props.img2} className="card-img-top img2 rounded-4" alt="..." />
        <div className="card-body">
            <h5 className="card-title fw-bolder fs-3">{props.title}</h5>
            <p className="card-text">There are many variations of passages available have versions suffered alteration.</p>
            <a href="#" class="card-link text-decoration-none"><i class="fa-solid fa-arrow-right"></i> View Details</a>
        </div>
        </div>
     </div>
  )
}

export default ServiceCard