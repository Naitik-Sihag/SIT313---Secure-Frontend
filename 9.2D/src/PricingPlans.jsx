import React from "react";
import { useNavigate } from "react-router-dom";

function PricingPlans() {
  const navigate = useNavigate();

  const handlePremiumSelect = () => {
    navigate("/payment");
  };

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "2.5rem" }}>
        Choose Your Plan
      </h2>
      
      <div style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap" }}>
        {/* Free Plan */}
        <div style={{
          border: "2px solid #e0e0e0",
          borderRadius: "12px",
          padding: "30px",
          width: "300px",
          textAlign: "center",
          backgroundColor: "#f9f9f9"
        }}>
          <h3 style={{ fontSize: "1.8rem", marginBottom: "10px" }}>Free Plan</h3>
          <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
            $0<span style={{ fontSize: "1rem", fontWeight: "normal" }}>/month</span>
          </p>
          
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}>
            <li style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>✓ Basic article access</li>
            <li style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>✓ Community discussions</li>
            <li style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>✓ Basic tutorials</li>
            <li style={{ padding: "8px 0" }}>✓ Standard support</li>
          </ul>
          
          <button style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer"
          }}>
            Current Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div style={{
          border: "3px solid #007bff",
          borderRadius: "12px",
          padding: "30px",
          width: "300px",
          textAlign: "center",
          backgroundColor: "white",
          position: "relative"
        }}>
          <div style={{
            position: "absolute",
            top: "-15px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#007bff",
            color: "white",
            padding: "5px 20px",
            borderRadius: "20px",
            fontSize: "0.9rem"
          }}>
            POPULAR
          </div>
          
          <h3 style={{ fontSize: "1.8rem", marginBottom: "10px", color: "#007bff" }}>Premium Plan</h3>
          <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#333", marginBottom: "20px" }}>
            $9.99<span style={{ fontSize: "1rem", fontWeight: "normal" }}>/month</span>
          </p>
          
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "30px" }}>
            <li style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>✓ All Free features</li>
            <li style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>✓ Custom themes & banners</li>
            <li style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>✓ Advanced analytics dashboard</li>
            <li style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>✓ Content control features</li>
            <li style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}>✓ Priority support</li>
            <li style={{ padding: "8px 0" }}>✓ Custom messaging system</li>
          </ul>
          
          <button 
            onClick={handlePremiumSelect}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
          >
            Upgrade to Premium
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;