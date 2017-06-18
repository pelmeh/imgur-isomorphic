import React, { Component } from 'react'
import classNames from 'classNames'
import style from './../../style/image.css'
import layout from './../../style/layout.css'

export default class Image extends Component {
  render () {
    const { onClick, url, pointer, border, small, large } = this.props
    const classes = classNames(style.image, layout.padding, {
      [layout.pointer]: pointer,
      [style.border]: border,
      [style.small]: small,
      [style.large]: large
    })
    return (
      <div className={classes} onClick={onClick ? () => onClick() : _ => {}}>
        <img src={url} />
      </div>
    )
  }
}
