import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          We'd love to hear from you! Fill out the form below, and our team will
          get back to you shortly.
        </p>

        <div className="contact-wrapper">
          {/* LEFT SIDE: CONTACT FORM */}
          <form
            className="contact-form"
            action="https://formspree.io/f/your-form-id" // replace with your Formspree or backend endpoint
            method="POST"
          >
            <div className="input-group">
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <input type="text" name="subject" placeholder="Subject" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>

          {/* RIGHT SIDE: CONTACT INFO + MAP */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              <strong>Address:</strong> Nanded city, Pune, Maharashtra,
              India
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919876543210">+91 7720060073</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:designatscreensource@gmail.com">
              galaxybath1@gmail.com
              </a>
            </p>

            <div className="social-links">
              <a
                href="https://www.facebook.com/ScreensourcePune/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                />
              </a>
            </div>

            {/* 🌍 EMBEDDED GOOGLE MAP */}
            <div className="map-container">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.398263095068!2d73.85674367496155!3d18.520430171324177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065b6e4d6df%3A0x2e9fffb4cfb682d7!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698248880000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: "none", borderRadius: "10px", marginTop: "20px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
