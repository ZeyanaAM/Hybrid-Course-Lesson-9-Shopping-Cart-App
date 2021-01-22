import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CartItem } from '../components/CartItem';
import { useDispatch, useSelector, connect } from 'react-redux';
import { REMOVE_ITEM, CHECK_OUT } from '../redux/actionTypes';
import { getCartItems } from '../redux/reducer';
import { removeItem } from '../redux/actions';
import { ToggleButton } from '../components/ToggleButton';

export default function ShoppingCart() {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ToggleButton />
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          product={item}
          removeFromCart={
            () => dispatch(removeItem(item.id))
            // dispatch({ type: REMOVE_ITEM, payload: item.id })
          }
        />
      ))}
      {cartItems.length > 0 ? (
        <Button
          title="Check out"
          onPress={() => dispatch({ type: CHECK_OUT })}
        />
      ) : (
        <Text style={styles.noItemsText}>No Items in the Cart</Text>
      )}
    </View>
  );
}

function ShoppingCartConnect(props) {
  return (
    <View style={styles.container}>
      {props.cartItems.map((item) => (
        <CartItem
          key={item.id}
          product={item}
          removeFromCart={() =>
            // props.dispatch({ type: REMOVE_ITEM, payload: item.id })
            props.removeItem(item.id)
          }
        />
      ))}
      {props.cartItems.length > 0 ? (
        <Button
          title="Check out"
          onPress={() => props.dispatch({ type: CHECK_OUT })}
        />
      ) : (
        <Text style={styles.noItemsText}>No Items in the Cart</Text>
      )}
    </View>
  );
}

const mapStateToProps = (state) => ({ cartItems: state.cartItems });
const mapDispatchToProps = (dispatch) => ({
  dispatch: (action) => dispatch(action),
  removeItem: (idToRemove) =>
    dispatch({ type: REMOVE_ITEM, payload: idToRemove }),
});

export const ShoppingCartUpdated = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartConnect);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noItemsText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});
