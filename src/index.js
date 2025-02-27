import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


import reducers from './reducers/index'

import App from './component/App'


const STORE = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={STORE}>
        <App/>
    </Provider>,
    document.getElementById('root')
)