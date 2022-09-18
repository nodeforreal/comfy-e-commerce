import styled from "styled-components/macro";
import { CartItem } from "./Cart";
import FlatButton from "./FlatButton";

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
      <hr className="table-top-hr" />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <hr className="table-bottom-hr" />
      <div className="shopping-btns-container">
        <FlatButton
          css={`
            background-color: var(--clr-primary-5);
            color: var(--clr-white);
          `}
        >
          continue shopping
        </FlatButton>
        <FlatButton
          css={`
            background-color: var(--clr-black);
            color: var(--clr-white);
          `}
        >
          clear shopping cart
        </FlatButton>
      </div>
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

  .shopping-btns-container {
    margin: 1.2rem 0 0;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 760px) {
    .table-column-grid {
      grid-template-columns: 200px auto auto;
    }
    .head-price,
    .head-subtotal {
      display: none;
    }
  }
`;

export default CartSection;
