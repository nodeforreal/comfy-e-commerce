import React from "react";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Wrapper>
      <section className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <article className="newsletter-content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            quis unde voluptatibus dicta, nisi qui minus, amet provident quia
            cupiditate dignissimos! Eos magni itaque molestias repellat
            consequuntur error natus odio?
          </p>
          <div className="email-form">
            <input type="email" placeholder="Enter email" />
            <button className="btn">subscribe</button>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem;

  @media screen and (min-width: 992px) {
    padding: 3rem;
  }

  .newsletter-content {
    padding: 1.6rem 0;
    display: grid;
    gap: 1.6rem;
    grid-template-columns: 1fr;
    align-items: center;

    @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }

    .email-form {
      display: flex;

      input {
        font-size: 1rem;
        width: 100%;
        border: 0.17rem solid var(--clr-grey-3);
        border-radius: var(--radius) 0 0 var(--radius);
        padding-left: 1rem;
        outline: none;
      }

      button {
        border: 0.17rem solid var(--clr-grey-3);
        border-radius: 0 var(--radius) var(--radius) 0;
        border-left: 0;
        color: var(--clr-white);
        text-transform: capitalize;

        &:hover {
          color: var(--clr-black);
        }
      }
    }

    @media screen and (min-width: 992px) {
      .email-form {
        height: 2.8rem;

        input {
          font-size: 1.3rem;
        }

        button {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default Newsletter;
