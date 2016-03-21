import React, { Component } from 'react'
import autobind from 'core-decorators/lib/autobind'
import { connect } from 'react-redux'

import commonStyles from 'theme/styles'

@autobind
class Login extends Component {
  test() {
    console.log(this.props)
  }

  test1() {
    console.log(this.props)
  }

  render() {
    console.log(this.props)
    return <div onClick={this.test} className={commonStyles['f-12']}>test</div>
  }
}

// export default Login
export default connect()(Login)
