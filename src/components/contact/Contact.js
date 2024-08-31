import React from 'react'
import './contact.css'
import Back from '../common/back/Back';

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17221860.429225545!2d66.90380508326427!3d19.544208868410994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1724644831540!5m2!1sen!2sin <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17221860.429225545!2d66.90380508326427!3d19.544208868410994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1724644831540!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
  return (
    <>
    <Back title="Contact Us"/>
    <section className='contact padding'>
        <div className='container padding shadow flexSB'>
           <div  className='left row'>
            <iframe src={map}></iframe>
           </div>
           <div className='right row'>
            <h1>Contact Us</h1>
            <p>  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='items grid2'>
                <div className='box'>
                    <h4>ADDRESS:</h4>
                    <p>  123, ABC Street, New York, USA</p>
                </div>
                <div className='box'>
                    <h4>Email:</h4>
                    <p>info@gmail.com</p>
                </div>
                <div className='box'>
                    <h4>Phone:</h4>
                    <p>123-456-7890</p>
                </div>
            </div>

            <form action=''>
                <div className='flexSB'>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    
                </div>
                <input type='email' placeholder='Subject' />
                <textarea cols='30' rows='10'>
                    Create a message here ...
                </textarea>
                <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DISCORD </span>
           </div>
        </div> 
    </section>

    </>
  )
}

export default Contact;