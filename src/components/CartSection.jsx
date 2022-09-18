import styled from "styled-components";
import { CartItem } from "./Cart";

const CartSection = () => {
  return (
    <Wrapper className="section-center">
      <div className="cart-table-head table-column-grid">
        <p>item</p>
        <p className="head-price">price</p>
        <p>quantity</p>
        <p className="head-subtotal">subtotal</p>
        <p></p>
      </div>
      <hr />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  .table-column-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 100px;
    justify-items: center;
    align-items: center;
  }

  .cart-table-head {
    p {
      text-transform: capitalize;
      color: var(--clr-grey-6);
      letter-spacing: var(--spacing);
    }
  }

  @media screen and (max-width: 760px) {
    .table-column-grid {
      grid-template-columns: auto auto auto;
    }
    .head-price,
    .head-subtotal {
      display: none;
    }
  }
`;

export default CartSection;
