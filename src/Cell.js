import React, { Component } from 'react'

export default class Cell extends Component {
    constructor(props){
        super()
        this.state ={
            color: props.value,
        }

    }
    coloring = (colors) =>{
        this.setState({color:colors})      
    }
 //   onClick={this.setState({
  //      color:'#333'
  //  })}

    render() {
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={() => this.coloring('#333')}
            >
                
            </div>
        )
    }
}
