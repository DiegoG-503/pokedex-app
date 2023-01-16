import React, { Component } from 'react'
import Card from './Card';

export class Pokemones extends Component {

  constructor(props){
    super(props);
    this.state = {
      characters: [],
      pageNum: 1
    }
  }

  fetchApi = async () => {
    let url = await fetch(`https://pokeapi.co/api/v2/pokemon/?page=${this.state.pageNum}`);
    let data = await url.json();

    this.setState({
      characters: [...data.results]
    })
  }

  componentDidMount(){
    this.fetchApi();
  }

  changePage = (prop) => {
    this.setState({
      pageNum: prop
    })
    this.fetchApi();
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.conteo !== this.props.conteo) {
      this.changePage(this.props.conteo);
    }
  }

  render() {
    return (
 
        this.state.characters.map((id, poke) => {
          return <Card key={id} {...poke} />
        })
      
    )
  }
}

export default Pokemones