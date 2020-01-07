import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducer from './reducers/index'
import Info from './Info';
import UserAgent from './UserAgent';

const store = createStore(reducer, applyMiddleware(thunk, logger))

function App() {
  return (
    <Provider store={store}>
      <div>
        <Info />
        <br />
        <UserAgent />
      </div>
    </Provider>
  );
}

export default App;
