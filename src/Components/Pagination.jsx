import React, { Component } from 'react'
import Home from './Home';

export default class Pagination extends Component {

    constructor(props){
        super(props);

        this.state = {
            contador: 1
        }
    }

  render() {
    return (
      <div>
        <button className='btn btn-primary' onClick={() => this.setState({contador: this.state.contador - 1})}>Prev</button>
        <button className='btn btn-primary' onClick={() => this.setState({contador: this.state.contador + 1})}>Next</button>
        <br />
        <Home conteo={this.state.contador} />
      </div>
    )
  }
}
