import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Gallery, Overlay } from './../components'

class App extends Component {
  render () {
    const { fetching } = this.props
    return (
      <div>
        {fetching && <Overlay>Loading...</Overlay>}
        <Gallery />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  fetching: state.gallery.fetching
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
