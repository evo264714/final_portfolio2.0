import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
  // Add any form handling logic here

  return (
    <div className=''>
      <div className="title">Contact us</div>
      <div className="title-info">We will get back to you soon!</div>

      <form action="" method="" className="form">
        <div className="input-group">
          <input type="text" name="first_name" id="first-name" placeholder="First name" />
          <label htmlFor="first-name">First name</label>
        </div>
        
        <div className="input-group">
          <input type="text" name="last_name" id="last-name" placeholder="Last Name" />
          <label htmlFor="last-name">Last name</label>
        </div>

        <div className="input-group">
          <input type="email" name="e-mail" id="e-mail" placeholder="e-mail" />
          <label htmlFor="e-mail">e-mail</label>
        </div>

        <div className="textarea-group">
          <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
          <label htmlFor="message">Message</label>
        </div>

        <div className="button-div">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
