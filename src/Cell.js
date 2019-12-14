import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props){
    super(props)
        this.state ={
            color:this.props.value
        }
  }
  changeColor =(newcolor)=> {
    this.setState({ color:newcolor });
  }
  render(){
    return(
      <div className = "cell" style={{backgroundColor: this.state.color}} 
      onClick={()=>this.changeColor('#333')}>
      {this.props.value}
      </div>
      )
  }

}

