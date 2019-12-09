import React, { Component } from 'react';

export default class Cell extends Component {
     
    constructor(props) {
        super()
        this.state = {
            color:props.value,
        } 
        // ...define initial state with a key of 'color' set to the 'value' prop
      }
     newColor=(color)=>{
      this.setState({
          color:color
      })}

  render() {
    return (
      <div className="cell" style={{backgroundColor:this.state.color}} onClick={()=>this.newColor( '#333')}>
      </div>
    )
  }
  
}