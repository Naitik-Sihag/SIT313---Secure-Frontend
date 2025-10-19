import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Use a test key - replace with your actual Stripe publishable key
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function PaymentPage() {
  return (
    <div style={{ padding: "20px" }}>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default PaymentPage;
