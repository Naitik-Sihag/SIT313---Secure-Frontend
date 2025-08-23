import React from "react";

function Newsletter() {
  return (
    <section className="newsletter">
      <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
      <div className="newsletter-box">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </section>
  );
}

export default Newsletter;