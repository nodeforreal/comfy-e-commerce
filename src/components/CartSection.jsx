import styled from "styled-components";
import ProductQuantity from "./ProductQuantity";
import { MdDelete } from "react-icons/md";

const CartSection = () => {
  return (
    <Wrapper className="section-center">
      <div className="table-cart-head">
        <p>item</p>
        <p>price</p>
        <p>quantity</p>
        <p>subtotal</p>
        <p></p>
      </div>
      <div className="table-cart-content">
        <div className="item">
          <img src={""} alt="" />
          <div>
            <h5 className="name">title</h5>
            <p className="color">
              color : <span></span>
            </p>
          </div>
        </div>
        <p className="price">$500</p>
        <div className="quantity">
          <ProductQuantity />
        </div>
        <p className="subtotal">$40000</p>
        <div className="delete">
          <button className="cart-delete-btn">
            <MdDelete />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  .table-head {
    text-transform: capitalize;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 0.4fr;
    justify-items: center;
  }
`;

export default CartSection;
