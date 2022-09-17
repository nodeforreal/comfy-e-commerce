import React from "react";
import styled from "styled-components";
import { testimonialItems } from "../utils/constants";

const Testimonial = () => {
  return (
    <Wrapper className="page">
      <section className="section-center">
        <article className="testimonial-content flex-even">
          <h3>Custom Furniture Built Only For You</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            corporis nulla tenetur officia in, rerum, quasi pariatur molestias,
            itaque magnam vero? Repellendus corporis fugiat assumenda quae,
            aliquid maxime consequatur ab?
          </p>
        </article>
        <section className="testimonial-card-section">
          {testimonialItems.map(({ id, icon, title, content }) => {
            return (
              <article key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <p>{content}</p>
              </article>
            );
          })}
        </section>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 1rem 0;
  background-color: var(--clr-primary-10);

  @media screen and (min-width: 992px) {
    padding: 3rem;
  }
  .testimonial-content {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    h3 {
      color: var(--clr-primary-5);
      text-align: center;
    }
    p {
      color: var(--clr-primary-5);
      text-align: center;
    }
  }

  @media screen and (min-width: 992px) {
    .testimonial-content {
      flex-direction: row;
    }
  }
  .testimonial-card-section {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    gap: 1.6rem;

    article {
      padding: 1.6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      background-color: var(--clr-primary-7);
      border-radius: var(--radius);
      span {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;

        display: grid;
        place-content: center;
        background-color: var(--clr-primary-10);
      }
      .icon {
        width: 2rem;
        height: 2rem;
      }
      p {
        text-align: center;
      }
    }
  }
`;
export default Testimonial;
