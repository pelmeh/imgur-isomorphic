import React, { Component } from 'react'
import classNames from 'classNames'
import style from './../../style/overlay.css'

export default class Overlay extends Component {
  render () {
    const { onClick, children, padding } = this.props
    return (
      <div className={style.overlay} onClick={onClick}>
        <div className={classNames(style.inner, { [style.innerPadding]: padding })}>
          {children}
        </div>
      </div>
    )
  }
}
