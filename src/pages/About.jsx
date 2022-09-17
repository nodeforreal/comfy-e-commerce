import React from "react";
import { PageHero, Underline } from "../components";

import img from "../assets/hero-bcg.jpeg";
import styled from "styled-components";
const About = () => {
  return (
    <Wrapper className="page-100">
      <PageHero title="About" />
      <div className="story-section section-center">
        <div className="img-part">
          <img src={img} alt="" />
        </div>
        <div className="story-part">
          <Underline width="7rem">
            <h2>Our Story</h2>
          </Underline>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .story-section {
    padding: 2rem 0;

    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media screen and (min-width: 992px) {
    .story-section {
      padding: 4rem 0;
      grid-template-columns: auto 1fr;
      gap: 4rem;
    }

    .img-part {
      img {
        max-width: 560px;
        height: 560px !important;
      }
    }
  }

  .img-part {
    img {
      border-radius: var(--radius);
      object-fit: cover;
      width: 100%;
      height: 360px;
    }
  }

  .story-part {
    p {
      margin-top: 2rem;
      color: var(--clr-grey-5);
      line-height: 2rem;
    }
  }
`;

export default About;
