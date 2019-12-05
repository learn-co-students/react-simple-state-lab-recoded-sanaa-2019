import React, {Component } from 'react';

export default class Cell extends Component {

    constructor(props){
        super()
        this.state={
             color:props.value,
        }
    }
    newColor=(newColor)=>{
        return this.setState({
            color:newColor
        });
    }
    render(){
        return(
            <div className = "cell" style={{backgroundColor: this.state.color}} onClick={()=>this.newColor('#333')}>{this.props.value} </div>
        )
    }
}
