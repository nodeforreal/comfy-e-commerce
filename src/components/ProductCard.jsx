import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { formatPrice } from "../utils/currency";

const ProductCard = ({ image, id: productId, name, price }) => {
  return (
    <Wrapper>
      <div className="product-image">
        <img src={image} alt="" />
        <Link to={`/products/${productId}`} className="link">
          <span className="icon-wrapper">
            <FaSearch className="icon" />
          </span>
        </Link>
      </div>
      <div className="product-info flex-even">
        <div className="text-ellipsis-parent">
          <p className="name text-ellipsis-child">{name}</p>
        </div>
        <p className="price">{formatPrice(price)}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .product-image {
    position: relative;

    img {
      border-radius: var(--radius);
      object-fit: cover;
    }

    .link {
      height: 100%;
      width: 100%;
      border-radius: var(--radius);

      position: absolute;
      left: 0;
      top: 0;
      display: grid;
      place-content: center;
      background-color: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: all 0.3s linear;
    }

    &:hover .link {
      opacity: 1;
    }

    .icon-wrapper {
      height: 2.4rem;
      width: 2.4rem;
      border-radius: 50%;
      background-color: var(--clr-primary-6);
      display: grid;
      place-content: center;
      color: var(--clr-white);
    }

    .icon {
      height: 1.2rem;
      width: 1.2rem;
      color: var(--clr-white);
    }
  }

  .product-info {
    * {
      margin: 0;
    }
    padding-top: 1rem;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;

    .name {
      font-size: 1rem;
      letter-spacing: var(--spacing);
      white-space: nowrap;
      color: var(--clr-grey-3);
      text-transform: capitalize;
    }

    .price {
      font-size: 1rem;
      letter-spacing: var(--spacing);
      color: var(--clr-primary-5);
    }
  }
`;
export default ProductCard;
