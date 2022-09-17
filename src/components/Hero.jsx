import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import imgBig from "../assets/hero-bcg.jpeg";
import imgSmall from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper>
      <section className="section-center hero-container ">
        <div className="hero-content">
          <h1>Design Your Comfort Zone</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi
            quis alias?
          </p>
          <Link to="/products" className="btn shop-btn">
            shop now
          </Link>
        </div>
        <div className="hero-img">
          <img className="img-big" src={imgBig} alt="" />
          <img className="img-small" src={imgSmall} alt="" />
          <div className="hero-solid"></div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: calc(100vh - 5rem);

  .hero-container {
    padding: 1rem 0 0;
    display: grid;
    gap: 1rem;
  }

  @media screen and (min-width: 992px) {
    .hero-container {
      padding: 3rem 1rem 0;
      grid-template-columns: 1fr 560px;
      gap: 2rem;
    }

    .hero-content {
      padding: 3rem 0;
      h1 {
        margin-bottom: 1rem;
      }
    }

    .shop-btn {
      font-size: 1.1rem;
    }

    .hero-img {
      display: flex !important;
    }
  }

  .hero-content {
    h1 {
      margin-bottom: 1rem;
      color: var(--clr-grey-3);
    }
    p {
      margin-bottom: 2rem;
      font-size: 1.2rem;
      color: var(--clr-grey-6);
    }
  }

  .hero-img {
    position: relative;
    display: none;
    justify-content: end;
    flex: 1;
    .img-big {
      width: 460px;
      border-radius: var(--radius);
      position: relative;
      z-index: 2;
    }

    .img-small {
      width: 260px;
      height: 160px;
      border-radius: var(--radius);
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 3;
    }

    .hero-solid {
      width: 360px;
      height: 360px;
      background-color: var(--clr-primary-7);
      border-radius: var(--radius);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-60%, -50%);
      z-index: 1;
    }
  }
`;
export default Hero;
