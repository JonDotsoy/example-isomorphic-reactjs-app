import React from 'react'
import ReactDOM from 'react-dom'
import App from '../app'

const selector = document.querySelector('#app')

const currentPath = location.pathname

function pushState (newPath) {
  history.pushState('page2', 'Title', newPath)
  renderState(currentPath, pushState, selector)
}

function renderState (currentPath, pushState, selector) {
  ReactDOM.render(<App path={location.pathname} preparePushState={preparePushState}/>, selector)
}

function preparePushState (newPath) {
  return function (event) {
    event.preventDefault()
    pushState(newPath)
  }
}

renderState(currentPath, pushState, selector)
