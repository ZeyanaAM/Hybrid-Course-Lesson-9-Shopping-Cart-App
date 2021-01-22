import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducerFunction } from './reducer';

export const store = createStore(reducerFunction, applyMiddleware(thunk));
