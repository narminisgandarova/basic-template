import React from 'react'
import logodark from '../assets/img/logo-dark.webp'
const Footer = () => {
  return (
   <>
    <div className="footer">
      <div className="container py-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-6">
         <div className="text-white1 d-flex flex-column justify-content-center ">
         <img src={logodark} width={250} alt="" />
          <p className='mt-3 '>There are many variation popular sheet <br /> containing available have version software <br /> like available.</p>
          <p className='mt-3 fw-bolder fs-3 mytext'>Your address goes here.</p>
         </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <div className="text-white">
                <h2>Company</h2>
                <ul className='list-unstyled mt-4'>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Print Ads</li>
                  <li>FAQ’s</li>
                  <li>Careers</li>
                </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
              <div className="text-white">
                <h2>Quick Links</h2>
                <ul className='list-unstyled mt-4'>
                  <li>Privacy Policy</li>
                  <li>Discussion</li>
                  <li>Terms & Conditions</li>
                  <li>Customer Support</li>
                  <li>Course FAQ’s</li>
                </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
              <div className="text-white">
                <h2>Product</h2>
                <ul className='list-unstyled mt-4'>
                  <li>Presentation</li>
                  <li>E-Books</li>
                  <li>Management Tool</li>
                  <li>Dashboard</li>
                  <li>Event Organizer</li>
                </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    </div>
    <div className="footerLast">
    <div className="container">
    <div className="d-flex justify-content-between text-white py-3">
       <p>© 2022 Strane. Made with  by HasThemes</p>
       <ul className='list-unstyled d-flex'>
        <li className='me-3'>Terms of Service</li>
        <li className='me-3'>Privacy Policy</li>
        <li className='me-5'>Sitemap</li>
       </ul>
    </div>
    </div>
  </div>
   </>
  )
}

export default Footer