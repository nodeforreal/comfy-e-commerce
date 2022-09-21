import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useProductsContext } from "../context/product-context";
import { useCartContext } from "../context/cart-context";

import {
  ProductStars,
  ProductImages,
  ProductColors,
  ProductQuantity,
  PageHero,
  Spinner,
} from "../components";

const SingleProduct = () => {
  const {
    fetchSingleProduct,
    single_product: product,
    single_product_fetch_begin: isLoading,
  } = useProductsContext();
  const { addToCart } = useCartContext();

  const { productId } = useParams();
  const [cartItem, setCartItem] = useState({});

  //   cart quantity handler
  const countLeft = () => {
    const selectedQuantity = cartItem.selectedQuantity - 1;
    const subTotal = cartItem.price * selectedQuantity;

    if (cartItem.selectedQuantity === 1) return;
    setCartItem({ ...cartItem, selectedQuantity, subTotal });
  };

  const countRight = () => {
    // if(cart.selectedQuantity ) return;
    const selectedQuantity = cartItem.selectedQuantity + 1;
    const subTotal = cartItem.price * selectedQuantity;
    setCartItem({ ...cartItem, selectedQuantity, subTotal });
  };

  // set color
  const cartSelectColor = (color) => {
    setCartItem({ ...cartItem, selectedColor: color });
  };

  useEffect(() => {
    fetchSingleProduct(productId);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  useEffect(() => {
    if (Object.keys(product).length === 0) return;
    setCartItem({
      id: product.id,
      name: product.name,
      image: product.images[0].url,
      price: product.price,
      selectedColor: "",
      selectedQuantity: 1,
      subTotal: 0,
      quantityLimit: 0,
    });
  }, [product]);

  //   spinner
  if (isLoading) {
    return (
      <section className="page-100 content-center">
        <Spinner />
      </section>
    );
  }

  return (
    <>
      <PageHero title="Product name" singleProduct={true} />
      <Wrapper className="section-center">
        <Link to="/products" className="btn">
          Back to Products
        </Link>
        <div className="product-section">
          <ProductImages images={product.images} />

          <div className="product-content">
            <h3 className="name">{product.name}</h3>
            <div className="product-ratings">
              <ProductStars stars={product.stars} />
              <p>({product.reviews} customer reviews)</p>
            </div>

            <h4 className="price">{product.price}</h4>
            <p className="description">{product.description}</p>
            <p className="product-info">
              <span className="title">available :</span>
              {"in stock"}
            </p>
            <p className="product-info">
              <span className="title">sku :</span>
              {productId}
            </p>
            <p className="product-info">
              <span className="title">brand :</span>
              {product.company}
            </p>
            <hr />
            <div className="product-colors">
              <span className="title">colors :</span>
              <ProductColors
                colors={product.colors}
                cartSelectColor={cartSelectColor}
              />
            </div>
            <div className="add-cart">
              <ProductQuantity
                count={cartItem.selectedQuantity}
                countLeft={countLeft}
                countRight={countRight}
              />
              <button
                className="btn cart-btn"
                onClick={() => addToCart(cartItem)}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 1rem 0;

  .product-section {
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }

  .product-ratings {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .price {
    color: var(--clr-primary-6);
  }

  .description {
    color: var(--clr-grey-4);
    line-height: 2rem;
  }

  .product-info {
    text-transform: capitalize;
  }

  .title {
    display: inline-flex;
    width: 7rem;
    font-weight: 700;
    color: var(--clr-grey-3);
  }

  .product-colors {
    padding-top: 1.3rem;
    display: flex;
    align-items: center;
  }
  .add-cart {
    margin-top: 1rem;
  }
  .cart-btn {
    margin: 1rem 0;
  }
  @media screen and (min-width: 992px) {
    padding: 3rem 0;
    .product-section {
      padding-top: 1rem;
      grid-template-columns: auto 1fr;
    }

    .product-ratings {
      display: flex;
      flex-direction: row;
    }
  }
`;
export default SingleProduct;
