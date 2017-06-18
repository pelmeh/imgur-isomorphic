import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Gallery as API } from './../actions'
import { Image, Overlay } from './../components'
import style from './../../style/gallery.css'

class Gallery extends Component {
  constructor (props) {
    super(props)
    this.onScroll = this.onScroll.bind(this)
  }

  componentWillMount () {
    const { images: { length }, load } = this.props
    if (!length) load()
  }

  onScroll (e) {
    console.log(e)
  }

  render () {
    const { modal, images, loadModal, closeModal } = this.props
    return (
      <div className={style.gallery} onScroll={this.onScroll}>
        {modal && <Modal url={modal.link} onClick={closeModal} />}
        {images && images.map(data =>
          <Img
            key={data.id}
            {...data}
            onClick={loadModal}
            border
            pointer
          />
        )}
      </div>
    )
  }
}

const Img = props => {
  const id = props.cover ? props.cover : props.id
  const url = `https://i.imgur.com/${id}b.jpg`
  const handler = () => props.onClick(id)
  return <Image {...props} onClick={handler} url={url} small />
}

const Modal = ({url, onClick}) => {
  return (
    <Overlay onClick={onClick} padding>
      <Image url={url} large />
    </Overlay>
  )
}

const mapStateToProps = state => ({
  images: state.gallery.images,
  fetching: state.gallery.fetching,
  modal: state.gallery.modal
})

const mapDispatchToProps = dispatch => ({
  load: id => dispatch(API.load(1000)),
  loadModal: id => dispatch(API.loadImage(id)),
  closeModal: id => dispatch(API.closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)
