import { useState } from 'react';
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock,
} from 'react-icons/fa';
import './Contact.css';

const contactInfo = [
  {
    id: 'contact-address',
    icon: <FaMapMarkerAlt />,
    title: 'Corporate Office',
    content: (
      <>
        Delevering Heights INFRA (DHI)<br />
        Plot No. 12, Sector 18, Industrial Area,<br />
        Hyderabad, Telangana – 500 001, India
      </>
    ),
  },
  {
    id: 'contact-phone',
    icon: <FaPhone />,
    title: 'Phone',
    content: (
      <>
        <a href="tel:+919876543210">+91 98765 43210</a><br />
        <a href="tel:+914023456789">+91 40 2345 6789</a>
      </>
    ),
  },
  {
    id: 'contact-email',
    icon: <FaEnvelope />,
    title: 'Email',
    content: (
      <>
        <a href="mailto:info@dhiinfra.com">info@dhiinfra.com</a><br />
        <a href="mailto:projects@dhiinfra.com">projects@dhiinfra.com</a>
      </>
    ),
  },
  {
    id: 'contact-hours',
    icon: <FaClock />,
    title: 'Business Hours',
    content: (
      <>
        Monday – Saturday<br />
        9:00 AM – 7:00 PM IST
      </>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section className="contact" id="contact" aria-label="Contact section">
      <div className="section-title">
        <span className="label">Get In Touch</span>
        <h2>Contact <span>Us</span></h2>
        <p>Reach out for telecom deployment, OFC rollout, FTTH or HDD solutions.</p>
      </div>

      <div className="contact-wrapper">
        {/* Contact Info */}
        <div className="contact-info">
          {contactInfo.map((info) => (
            <div className="contact-info-box reveal" key={info.id} id={info.id}>
              <div className="contact-info-icon">{info.icon}</div>
              <div className="contact-info-text">
                <h4>{info.title}</h4>
                <p>{info.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper reveal reveal-delay-2">
          <h3>Send Us a Message</h3>

          {submitted ? (
            <div className="form-success" role="alert">
              ✓ Thank you! We'll get back to you within 2 working days.
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-company">Company</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-service">Service Required</label>
                <select id="contact-service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option value="ofc">OFC Backbone Infrastructure</option>
                  <option value="ftth">FTTH & Last Mile Connectivity</option>
                  <option value="hdd">HDD & Underground Utility</option>
                  <option value="om">Telecom O&M Services</option>
                  <option value="smartcity">Smart City Solutions</option>
                  <option value="other">Other / General Enquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project requirements..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button id="contact-submit-btn" type="submit" className="form-submit">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
