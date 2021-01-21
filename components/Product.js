import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Item } from './Item';

export function Product({ product, addToCart, productInCart }) {
  return (
    <Item
      product={product}
      action={
        productInCart ? (
          <Text style={styles.inCartText}>Item In Cart</Text>
        ) : (
          <Button title="Add to Cart" onPress={addToCart} />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  inCartText: {
    fontSize: 16,
    color: 'grey',
  },
});
