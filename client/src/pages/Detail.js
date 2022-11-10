import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_JACKET,
} from '../utils/actions';
import { QUERY_JACKET } from '../utils/queries';
import { idbPromise } from '../utils/helpers';


function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentJacket, setCurrentJacket] = useState({});

  const { loading, data } = useQuery(QUERY_JACKET);

  const { jacket, cart } = state;

  useEffect(() => {
    // already in global store
    if (jacket.length) {
      setCurrentJacket(jacket.find((jacket) => jacket._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_Jacket,
        jacket: data.jacket,
      });

      data.jacket.forEach((jacket) => {
        idbPromise('jacket', 'put', jacket);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('jacket', 'get').then((indexedJacket) => {
        dispatch({
          type: UPDATE_JACKET,
          jacket: indexedJacket,
        });
      });
    }
  }, [jacket, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        jacket: { ...currentJacket, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentJacket, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentJacket._id,
    });

    idbPromise('cart', 'delete', { ...currentJacket });
  };

  return (
    <>
      {currentJacket && cart ? (
        <div className="container my-1">
          <Link to="/">← Back to Jackets</Link>

          <h2>{currentJacket.name}</h2>

          <p>{currentJacket.description}</p>

          <p>
            <strong>Price:</strong>${currentJacket.price}{' '}
            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentJacket._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentJacket.image}`}
            alt={currentJacket.name}
          />
        </div>
      ) : null}
      <Cart />
    </>
  );
}

export default Detail;
