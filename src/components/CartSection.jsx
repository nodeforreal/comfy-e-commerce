import styled from "styled-components";


const CartSection = () => {
  return (
    <Wrapper className="section-center">
      <div className="cart-table-head table-column-grid">
        <p>item</p>
        <p>price</p>
        <p>quantity</p>
        <p>subtotal</p>
        <p></p>
      </div>
      <hr />
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  .table-column-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 100px;
    justify-items: center;
    align-items: center;
  }

  .cart-table-head {
    p{
      text-transform: capitalize;
      color: var(--clr-grey-6);
      letter-spacing: var(--spacing);
    }
  }
`;

export default CartSection;
