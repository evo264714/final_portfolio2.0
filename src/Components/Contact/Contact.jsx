import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { useContext } from 'react';
import { ThemeContext } from '../Data/ThemeContext';

const Contact = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section id='contact'>
            <div className="line-styling">
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-circle" style={{ backgroundColor: theme.primary }}></div>
                <div className="style-line" style={{ backgroundColor: theme.primary }}></div>
            </div>
            <h2 className='text-center h1_tag_contact fw-bold my-5' style={{ color: theme.primary }}>Contact Me</h2>

            <div className='container contact_container'>
                <div className="contact_options">
                    <article className="contact_option">
                        <AiOutlineMail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>mehedievo@gmail.com</h5>
                        <a href="mailto:mehediEvo@gmail.com" target='__blank'>Send a message</a>
                    </article>
                    <article className="contact_option">
                        <FaFacebookMessenger className='contact_option-icon' />
                        <h4>Messenger</h4>
                        <h5>Mehedi Hasan Evo</h5>
                        <a href="https://m.me/mehedihasan.evo/" target='__blank'>Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BiLogoWhatsapp className='contact_option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+8801626618090</h5>
                        <a href="https://api.whatsapp.com/send?phone+8801626618090" target='__blank'>Send a message</a>
                    </article>
                </div>
                <form className='my-auto'>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;