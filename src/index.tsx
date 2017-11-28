import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import App from './components/App';

declare namespace JSX {
  interface IntrinsicElements {
    App: any
  }
}

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
