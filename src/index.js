import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Root from './components/root';
import rootReducer from './reducers/rootReducer';

// import App from './components/app';
// import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

document.addEventListener('DOMContentLoaded', () => {
  // const preloadedState = {
  //   person1: Math.random(100),
  //   person2: Math.random(100)
  // };

  const store = createStore(
    rootReducer,
    // preloadedState,
    applyMiddleware()
  );

  const root = document.getElementById('converter');
  ReactDOM.render(<Root store={ store }/>, root);
});
