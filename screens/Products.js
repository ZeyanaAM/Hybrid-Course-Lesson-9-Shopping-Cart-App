import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ITEM } from '../redux/actionTypes';
import { Product } from '../components/Product';
import { getCartItems } from '../redux/reducer';
import { ToggleButton } from '../components/ToggleButton';

const allProductItems = [
  { id: 1, name: 'Milk' },
  { id: 2, name: 'Bread' },
  { id: 3, name: 'Eggs' },
  { id: 4, name: 'Pasta' },
  { id: 5, name: 'Orange Juice' },
];

export default function Products() {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ToggleButton />
      {allProductItems.map((product) => (
        <Product
          key={product.id}
          product={product}
          // addToCart={() => dispatch({ type: ADD_ITEM, payload: product })}
          // addToCart={() => checkInStock(product, dispatch)}
          addToCart={() => dispatch(checkInStockAction(product))}
          productInCart={cartItems.some(
            (cartItem) => product.id === cartItem.id
          )}
        />
      ))}
    </View>
  );
}

const checkInStock = (product, dispatch) => {
  fetch('https://www.google.com/search?q=secret+sauce').then((isInStock) => {
    console.log('!! fetched if in stock !!');
    dispatch({ type: ADD_ITEM, payload: product });
    // if (isInStock) {
    //   dispatch({ type: ADD_ITEM, payload: product })
    // } else {
    //  console.log("")
    // }
  });
};

function checkInStockAction(product) {
  return (dispatch) => {
    fetch('https://www.google.com/search?q=secret+sauce').then((isInStock) => {
      console.log('!! fetched if in stock !!');
      dispatch({ type: ADD_ITEM, payload: product });
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
