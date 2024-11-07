import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  // onDecrement = () => {
  //   this.setState(prevState => ({
  //     count: prevState.count > 0 ? prevState.count - 1 : 0,
  //   }))
  // }

  onDecrement = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {count: prevState.count - 1}
      } else {
        return {count: 0}
      }
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter App</h1>
        <p className="count">{count}</p>
        <div>
          <button type="button" onClick={this.onIncrement} className="button">
            Increase
          </button>
          <button type="button" onClick={this.onDecrement} className="button">
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
