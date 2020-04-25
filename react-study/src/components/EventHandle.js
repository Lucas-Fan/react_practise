import React, {Component, setState} from 'react'

export default class EventHandle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={e => this.handleChange(e)}></input>
      </div>
    )
  }

  // handleChange = (e) => {
  //   this.setState({
  //     name: e.target.value
  //   })
  // }

  // render() {
  //   return (
  //     <div>
  //       <input type="text" value={this.state.name} onChange={this.handleChange}></input>
  //     </div>
  //   )
  // }
}
