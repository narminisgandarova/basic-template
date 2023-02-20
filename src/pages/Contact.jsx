import React from 'react'
import ContactCard from './ContactCard'
import line from '../assets/img/line.webp'

const Contact = () => {
  return (
  <>
   <div className="first d-flex flex-column justify-content-center align-items-center">
      <p className='text-white fw-bolder fs-1 '>Contact Us</p>
      <div className="box p-3 ">
        Home // <span>Services</span>
      </div>
    </div>
    <div className="second-con">
      <div className="container py-5">
        <div className="row">
          <ContactCard title="Head Quater:"/>
          <ContactCard title="Branch-1"/>
          <ContactCard title="Branch-2"/>
        </div>
      </div>
    </div>
    <div className="third-con">
      <div className="container py-5">
        <div className="text d-flex flex-column justify-content-center align-items-center">
          <div className="box1 p-2">
          Contact
          </div>
          <h2>Contact Us</h2>
          <img src={line} alt="" />
        </div>
        <form className='mt-5'>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Name" aria-label="First name" />
          </div>
          <div className="col">
            <input type="email" className="form-control" placeholder="Email" aria-label="Last name" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <input type="number" className="form-control" placeholder="Phone No." aria-label="First name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Subject" aria-label="Last name" />
          </div>
        </div>
        <textarea name="" id="" cols="30" rows="10" className='mt-4' placeholder='Write a message...'></textarea>
       <div className="d-flex justify-content-center align-items-center mt-5">
       <button type="button" class="btn mybtn fw-bolder px-5 py-3 rounded-pill">Submit Now <i class="fa-solid fa-angles-right"></i></button>
       </div>
        </form>
        
      </div>
    </div>
    <div className="four-con">
   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50429.416440676716!2d144.955775!3d-37.817251!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1676813274848!5m2!1sen!2sus" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

    </div>
  </>
  )
}

export default Contact