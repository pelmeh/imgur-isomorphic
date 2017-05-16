import React from 'react'
import { render } from 'react-dom'

(() => console.log('Hello world! Test ES6'))()

render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
)