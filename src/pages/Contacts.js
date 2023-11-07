import React, { useRef,useState } from 'react'
import "../styles/Contact.css"
import Address from "../assets/address.png"
import Phone from "../assets/phone.png"
import Email from "../assets/email.png"
import emailjs from '@emailjs/browser';



const Contacts = () => {
   const formRef=useRef()
   const [done,setDone]=useState(false)

   const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_727btib', 'template_h6w52fm', formRef.current, 'XynfvdTz9XW9V_5jt')
         .then((result) => {
             console.log(result.text);
             setDone(true)
         }, (error) => {
             console.log(error.text);
         });
         document.getElementById("myForm").reset();

   }

  return (
    <div className='c'>
      <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    Lets discuss your project
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                        src={Phone}
                        alt=''
                        className='c-icon'
                        />
                        +254721418479
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Email}
                        alt=''
                        className='c-icon'
                        />
                        anythingtechke@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img 
                        src={Address}
                        alt=''
                        className='c-icon'
                        />
                        Kanu Street,Cigma Plaza,Nakuru
                    </div>
                </div>
            </div>
            <div className="c-right">
            <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit} id="myForm">
            <input type="text" placeholder="name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Your Email" name="user_email" />
            <textarea rows="5" placeholder='Message' name='message' />
            <button>Submit</button>
            {done &&  "Thank you.."}
          </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contacts



