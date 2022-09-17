import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { RiLoginBoxFill } from "react-icons/ri";
import styled from "styled-components";

const CartButtons = ({onClick}) => {
  return (
    <Wrapper className="cart-btn-container" >
      <Link to="cart" className="nav-btn cart-btn " onClick={onClick}>
        Cart
        <BsFillCartCheckFill className="icon" />
      </Link>
      <button className="nav-btn" onClick={onClick}>
        Login
        <RiLoginBoxFill className="icon" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  .nav-btn {
    margin-right: 1.6rem;
    background-color: transparent;
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-2);

    .icon {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  .cart-btn {
    position: relative;

    /* cart items count */
    &::before {
      padding: 0.25rem;
      position: absolute;
      right: -0.8rem;
      top: -0.8rem;
      content: "10";
      width: 1.6rem;
      height: 1.6rem;
      background-color: var(--clr-primary-5);
      border-radius: 50%;

      display: grid;
      place-content: center;

      font-size: 0.7rem;
      font-weight: 700;
      color: var(--clr-white);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`
export default CartButtons