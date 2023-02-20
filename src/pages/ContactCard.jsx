import React from 'react'

const ContactCard = (props) => {
  return (
   <div className="col-12 col-sm-6 col-md-4">
     <div className="box gy-3">
    <h3>{props.title}</h3>
    <p className='mt-5'><i class="text-primary me-3 fa-solid fa-phone"></i>+(012) 345 6789</p>
    <p><i class="text-primary me-3 fa-solid fa-envelope"></i>demo@example.com</p>
    <p><i class="text-primary me-3 fa-solid fa-location-dot"></i>Your address goes here.</p>
    </div>
   </div>
  )
}

export default ContactCard