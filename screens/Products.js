import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ITEM } from '../redux/actionTypes';
import { Product } from '../components/Product';
import { getCartItems } from '../redux/reducer';

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
      {allProductItems.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={() => dispatch({ type: ADD_ITEM, payload: product })}
          productInCart={cartItems.some(
            (cartItem) => product.id === cartItem.id
          )}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
