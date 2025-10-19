import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setMessage("");

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setMessage(error.message);
      setIsProcessing(false);
    } else {
      // In a real app, you would send paymentMethod.id to your server
      setMessage("Payment successful! Welcome to Premium!");
      setIsProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h3 style={{ textAlign: "center", marginBottom: "30px" }}>Complete Your Payment</h3>
      
      <div style={{ 
        backgroundColor: "#f8f9fa", 
        padding: "20px", 
        borderRadius: "8px", 
        marginBottom: "30px" 
      }}>
        <h4>Premium Plan - $9.99/month</h4>
        <p>✓ All premium features included</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ 
          border: "1px solid #ccc", 
          borderRadius: "4px", 
          padding: "12px", 
          marginBottom: "20px" 
        }}>
          <CardElement options={cardElementOptions} />
        </div>

        <button
          type="submit"
          disabled={!stripe || isProcessing}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: isProcessing ? "#6c757d" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: isProcessing ? "not-allowed" : "pointer"
          }}
        >
          {isProcessing ? "Processing..." : "Pay $9.99"}
        </button>

        {message && (
          <div style={{ 
            marginTop: "20px", 
            padding: "10px", 
            borderRadius: "4px",
            backgroundColor: message.includes("successful") ? "#d4edda" : "#f8d7da",
            color: message.includes("successful") ? "#155724" : "#721c24",
            border: `1px solid ${message.includes("successful") ? "#c3e6cb" : "#f5c6cb"}`
          }}>
            {message}
          </div>
        )}
      </form>

      <p style={{ 
        fontSize: "0.9rem", 
        color: "#666", 
        textAlign: "center", 
        marginTop: "20px" 
      }}>
        Test card: 4242 4242 4242 4242, any future date, any CVC
      </p>
    </div>
  );
}

export default CheckoutForm;