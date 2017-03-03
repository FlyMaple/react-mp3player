import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'

import '../public/plugins/font-awesome/css/font-awesome.min.css'
import '../public/css/style.css'

import App from './components/App'

ReactDOM.render(
    <Provider store={ configureStore }>
        <App />
    </Provider>,
    document.getElementById('root')
)