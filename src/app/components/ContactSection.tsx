import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  return (
    <div className="contactus-form-container" id="contactme">
      <div className="container">
        <h1 className="contactus-heading">Contact me</h1>
        <h3 className="contactus-sub-heading">
          Questions, thoughts, or just want to say hello?
        </h3>

        <div className="contactus-form-container">
          <form className="form" action="">
            <div className="formfield-container">
              <input 
                className="formfield" 
                type="text" 
                name="name" 
                placeholder="Enter your name" 
              />

              <input 
                className="formfield" 
                type="email" 
                name="email" 
                placeholder="Enter your email address" 
              />

              <input 
                className="formfield" 
                type="text" 
                name="subject" 
                placeholder="Enter your subject" 
              />

              <textarea 
                name="message" 
                className="formfield formfield-textarea"
                placeholder="Enter your message"
                rows={10}
              ></textarea>
            </div>
            
            <div>
              <button type="submit" className="btn-pink" id="submit-btn">
                Send Message
                <FontAwesomeIcon icon={faPaperPlane} className="submit-icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;