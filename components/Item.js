import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Item({ product, action }) {
  return (
    <View style={styles.product}>
      <Text style={styles.productName}>{product.name}</Text>
      {action}
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },

  productName: {
    color: 'black',
    fontSize: 18,
    fontWeight: '300',
  },
});
