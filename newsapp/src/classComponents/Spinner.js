import React, { Component } from 'react'
import icon from './Spin.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="container text-center">
            <img src={icon} alt="" />
      </div>
    )
  }
  }

export default Spinner