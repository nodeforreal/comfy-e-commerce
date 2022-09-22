import styled from "styled-components";
import { useCartContext } from "../../context/cart-context";
import { cartCheckout } from "../../utils/cart-checkout";
const Checkout = () => {
  const { cart_items } = useCartContext();
  const cart_checkout = cartCheckout(cart_items, 55.5);
  const { sub_total, shipping_fee, order_total } = cart_checkout;
  return (
    <Wrapper>
      <div className="checkout-card">
        <div className="subtotal flex-even">
          <h5>subtotal :</h5>
          <h5>{sub_total}</h5>
        </div>
        <div className="shipping-fee flex-even">
          <p>Shipping Fee :</p>
          <p>{shipping_fee}</p>
        </div>
        <hr />
        <div className="order-total flex-even">
          <h4>Order Total :</h4>
          <h4>{order_total}</h4>
        </div>
      </div>
      <button className="btn checkout-btn">proceed to checkout</button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: clamp(260px, 100%, 390px);
  .checkout-card {
    * {
      white-space: nowrap;
    }
    width: 100%;
    height: 175px;
    padding: 1rem 2rem;
    border: 0.0625rem solid var(--clr-grey-8);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: var(--spacing);

    hr {
      margin-bottom: 1.2rem;
    }
  }
  .checkout-btn {
    margin-top: 1rem;
    width: 100%;
    font-weight: 700;
  }
`;

export default Checkout;
