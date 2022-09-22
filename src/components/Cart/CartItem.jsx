import React from "react";
import styled from "styled-components/macro";
import ProductQuantity from "../ProductQuantity";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../../context/cart-context";

const CartItem = ({
  image,
  itemId,
  name,
  price,
  selectedColor,
  selectedQuantity,
  subTotal,
}) => {
  const { addItemQuantity, removeItemQuantity, removeCartItem } =
    useCartContext();
  return (
    <Wrapper className="table-column-grid">
      <div className="product">
        <img src={image} alt="" />
        <div>
          <div className="text-ellipsis-parent">
            <h5 className="product-name text-ellipsis-child">{name}</h5>
          </div>
          <div className="product-color">
            <p>color :</p>
            <span
              css={`
                background-color: ${selectedColor};
              `}
            ></span>
          </div>
          <p className="product-price-760">{price}</p>
        </div>
      </div>
      <p className="product-price">{price}</p>
      <ProductQuantity
        count={selectedQuantity}
        countLeft={() => removeItemQuantity(itemId)}
        countRight={() => addItemQuantity(itemId)}
      />
      <p className="product-subtotal">{subTotal}</p>
      <div className="cart-delete">
        <button
          className="cart-delete-btn"
          onClick={() => removeCartItem(itemId)}
        >
          <MdDelete className="icon" />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  * {
    margin: 0;
  }
  margin: 1rem 0;

  .product {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    justify-self: flex-start;
    gap: 1rem;
    img {
      width: 75px;
      height: 65px;
      border-radius: var(--radius);
    }
  }

  @media screen and (min-width: 530px) {
    .product {
      img {
        width: 100px;
        height: 75px;
      }
    }
  }

  .product-name {
    margin: 0;
    white-space: nowrap;
  }

  .product-color {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
      white-space: nowrap;
      margin: 0;
    }

    span {
      width: 1rem;
      height: 1rem;
      border-radius: var(--radius);
    }
  }

  .product-price {
    letter-spacing: var(--spacing);
    color: var(--clr-primary-6);
  }

  .product-quantity {
    font-size: 1.6rem;
  }

  .quantity-btn {
    .icon {
      width: 1rem;
      height: 1rem;
    }
  }

  .product-subtotal {
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
  }

  .cart-delete-btn {
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: var(--radius);
    display: grid;
    place-content: center;

    .icon {
      width: 1rem;
      height: 1rem;
      color: var(--clr-white);
    }
  }

  .product-price-760 {
    display: block;
    letter-spacing: var(--spacing);
    color: var(--clr-primary-6);
  }

  .product-price {
    display: none;
  }

  .product-quantity {
    font-size: 1.3rem;
  }

  .quantity-btn {
    .icon {
      width: 0.8rem;
      height: 0.8rem;
    }
  }

  .product-subtotal {
    display: none;
  }

  @media screen and (min-width: 760px) {
    .product-price-760 {
      display: none;
    }
    .product-price,
    .product-subtotal {
      display: block;
    }
  }
`;

export default CartItem;
