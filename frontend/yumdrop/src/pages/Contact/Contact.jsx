import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-wrapper">
              <div className="row g-0">
                <div className="col-md-5">
                  <div className="contact-info h-100">
                    <h3 className="mb-4">Get in touch</h3>
                    <p className="mb-4">
                      We'd love to hear from you. Please fill out the form or contact us using the information below.
                    </p>

                    <div className="contact-item d-flex mb-3">
                      <div className="contact-icon me-3">
                        <i class="bi bi-house"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Address</h6>
                        <p className="mb-0">
                          123 Business Avenue, Suite 100<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>

                    <div className="contact-item d-flex mb-3">
                      <div className="contact-icon me-3">
                        <i class="bi bi-telephone"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Phone</h6>
                        <p className="mb-0">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="contact-item d-flex mb-3">
                      <div className="contact-icon me-3">
                        <i class="bi bi-envelope"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Email</h6>
                        <p className="mb-0">viajebrandon@gmail.com</p>
                      </div>
                    </div>

                    <div className="social-links mt-4">
                      <h6 className="mb-3">Follow Us</h6>
                      <a href="https://www.linkedin.com/in/brandon-viaje-236179217/" className="social-icon me-2"><i className="bi bi-linkedin"></i></a>
                      <a href="https://github.com/brandonviaje" className="social-icon me-2"><i class="bi bi-github"></i></a>
                      <a href="https://www.instagram.com/bmviaje/" className="social-icon"><i class="bi bi-instagram"></i></a>
                    </div>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="contact-form">
                    <h3 className="mb-4">Send us a message</h3>
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">First Name</label>
                          <input type="text" className="form-control" placeholder="John" />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Last Name</label>
                          <input type="text" className="form-control" placeholder="Doe" />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="john@example.com" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input type="text" className="form-control" placeholder="How can we help?" />
                      </div>

                      <div className="mb-4">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" rows="5" placeholder="Your message here..."></textarea>
                      </div>

                      <button type="submit" className="btn btn-submit text-white">Send Message</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default Contact;
