import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

@connect(state => ({language: state.language}))
export default class extends React.Component {

  static propTypes = {
    language: PropTypes.string,
    children: PropTypes.any
  }

  static childContextTypes = {
    language: PropTypes.string
  }

  getChildContext() {
    return {
      language: this.props.language
    }
  }

  render() {
    return (
      <div>
        {/* this will render the child routes */}
        {this.props.children}
      </div>
    )
  }
}
