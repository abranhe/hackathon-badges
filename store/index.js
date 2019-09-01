import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import initialState from './initial-state';
import reducers from './reducers';

const logger = createLogger({});

let middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  middleware = [ ...middleware, logger ];
}

export function initializeStore() {
  return createStore(reducers, initialState, applyMiddleware(...middleware));
}
