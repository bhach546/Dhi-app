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
        Plot no 36,37,43,44 Sai Hills<br />
        Venkataramana Colony,<br />
        Hyderabad, Telangana – 500085, India
      </>
    ),
  },
  {
    id: 'contact-email',
    icon: <FaEnvelope />,
    title: 'Email',
    content: (
      <>
        <a href="mailto:info@dhiinfra.com">info@dh-infra.in</a><br />
      </>
    ),
  },
  {
    id: 'contact-hours',
    icon: <FaClock />,
    title: 'Business Hours',
    content: (
      <>
        Monday – Friday<br />
        9:00 AM – 7:00 PM IST
      </>
    ),
  },
];

export default function Contact() {
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

      </div>
    </section>
  );
}
