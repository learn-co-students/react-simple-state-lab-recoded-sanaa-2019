import React, { Component } from 'react';


export default class Cell extends Component {

constructor(props) {
    super()
    this.state = {

        color:props.value,

    } // ...define initial state with a key of 'color' set to the 'value' prop
  }

  newColor = (newColor) => {

    return this.setState( {
            color:newColor //merge and update color property
        });
    }
  

  render(){
      return(
          <div className = "cell" style={{backgroundColor: this.state.color}}  onClick={()=>this.newColor('#333')}>{this.props.value}</div>
      )
  }
}





    

