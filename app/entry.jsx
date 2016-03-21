import 'theme/styles'
import 'utils/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { load as loadI18n } from 'i18n'
import { store } from 'redax'
import Router from 'routes'

loadI18n(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>
    , document.getElementById('app')
  )
})
