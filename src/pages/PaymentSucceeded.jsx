import React,{useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import { PageHero } from "../components";

const PaymentSucceeded = () => {
    const navigate = useNavigate()
    useEffect(()=>{
       let navigationTimeout = setTimeout(() => {
            clearCart();
            console.log("navigate-timer-30s");
            navigate("/");
          }, 30000);
          return ()=>{
              clearTimeout(navigationTimeout)
          }
    })
  return (
    <Wrapper className="page-100">
      <PageHero title="Payment Succeeded" />
      <div className="payment-succeeded-content-container">
        <div className="payment-succeeded-content">
          <h4>
            Thank You Your Payment Was Successful! Redirecting To Home Page
            Shortly.
          </h4>
          <p className="succeeded-msg">
            Payment succeeded, see the result in your{" "}
            <a
              href="https://dashboard.stripe.com/test/payments?status[0]=successful"
              className="stripe-dashboard-link"
            >
              Stripe dashboard.
            </a>
            Now Page will shorlty redirect after 30s.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .succeed-msg {
    margin: 1rem 0;
  }

  .stripe-dashboard-link {
    font-weight: 650;
    color: var(--clr-grey-5);
  }
  .payment-succeeded-content-container {
    display: flex;
  }
  .payment-succeeded-content {
    margin: 2rem auto;
  }
`;

export default PaymentSucceeded;
