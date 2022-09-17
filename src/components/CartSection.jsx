import react from "react";
import styled from "styled-components";

const CartSection = () => {
  return (
    <Wrapper className="section-center">
      <table className="table">
        <tr>
          <th>item</th>
          <th>price</th>
          <th>quantity</th>
          <th>subtotal</th>
          <th></th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default CartSection;
