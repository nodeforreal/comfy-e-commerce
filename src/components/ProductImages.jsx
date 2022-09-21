import React, { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const activeImage = images[imageIndex].url;

  return (
    <Wrapper>
      <div className="product-image">
        <img src={activeImage} alt="" />
      </div>
      <div className="product-images">
        {images.map(({ url }, index) => {
          return (
            <button
              key={index}
              className={`selection-image ${
                imageIndex === index ? "selection-active" : ""
              }`}
              onClick={() => setImageIndex(index)}
            >
              <img src={url} alt="" />
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .product-image {
    width: 100%;
    height: 380px;
    img {
      object-fit: cover;
      border-radius: var(--radius);
    }
  }

  .product-images {
    padding-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    gap: 1rem;
  }

  .selection-image {
    height: 55px;
    background-color: var(--clr-primary-4);
    border-radius: var(--radius);

    img {
      object-fit: cover;
      border-radius: var(--radius);
    }
  }

  .selection-active {
    padding: 0.2rem;
  }

  @media screen and (min-width: 560px) {
    .product-images {
      grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    }
    .selection-image {
      height: 75px;
    }
  }
  @media screen and (min-width: 760px) {
    .product-images {
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
    .selection-image {
      height: 85px;
    }
  }
  @media screen and (min-width: 992px) {
    .product-images {
      grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    }

    .product-image {
      width: 560px;
      height: 480px;
    }

    .product-images {
      padding-top: 1rem;
    }

    .selection-image {
      height: 100px;
    }
  }
`;
export default ProductImages;
