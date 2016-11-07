import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';

let middlewares = [promise];

const store = createStore(reducers, applyMiddleware(...middlewares));

// store.subscribe(() => {
//   saveState(store.get.getState());
// });

export default store;
