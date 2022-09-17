import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductItem = ({ image, id: productId, name, price, description }) => {
  return (
    <Wrapper>
      <div className="product-image">
        <img src={image} alt="" />
      </div>
      <div className="product-content">
        <h4 className="name">{name}</h4>
        <h5 className="price">${price}</h5>
        <p className="description">{description.slice(0, 200)}...</p>
        <Link to={`/products/${productId}`} className="btn details-btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .product-image {
    width: clamp(220px, 100%, 310px);
    height: 175px;
    flex-shrink: 0;
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    .product-image {
      height: 220px;
    }
  }

  img {
    border-radius: var(--radius);
    object-fit: cover;
  }

  .product-content {
    .name {
      color: var(--clr-grey-3);
    }

    .price {
      color: var(--clr-primary-6);
    }
    .details-btn {
      font-size: 0.5rem;
    }
  }
`;

export default ProductItem;