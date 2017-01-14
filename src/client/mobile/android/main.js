import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducer from '../../base/reducers';

const store = createStore(reducer);

export default function main() {
  class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <App/>
        </Provider>
      );
    }
  }

  return Root;
}
