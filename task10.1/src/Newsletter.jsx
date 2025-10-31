import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    emailjs.init({
      publicKey: "gpol1Nz2glNrznl05",
    });
  }, []);

  const sendMail = (e) => {
    e.preventDefault();
    
    const parms = {
      email: email,
    };

    emailjs.send("service_bl4dfdm", "template_v3rzy37", parms)
      .then(() => {
        alert("Email sent successfully!!!!");
        setEmail("");
      })
      .catch(() => {
        alert("Failed to send the email to new subscriber.");
      });
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h3 className="newsletter-title">SIGN UP FOR OUR DAILY INSIDER</h3>
        <form onSubmit={sendMail} className="newsletter-form">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" 
            required
            className="newsletter-input"
          />
          <button 
            type="submit"
            className="newsletter-button"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;