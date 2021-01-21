import React from 'react';
import { Button } from 'react-native';
import { Item } from './Item';

export function CartItem({ product, removeFromCart }) {
  return (
    <Item
      product={product}
      action={<Button title="Remove" onPress={removeFromCart} />}
    />
  );
}
