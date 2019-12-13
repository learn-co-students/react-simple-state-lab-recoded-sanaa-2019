import React, { Component } from 'react'

export class Cell extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            color:this.props.value
        }
    }
    changeHandler=()=>{
        this.setState({color:"#333"})
    }
    
    render() {
        return (
            <div className="cell" style={{backgroundColor:this.state.color}} onClick={this.changeHandler}>
            
            </div>
            )
        }
    }
    
    export default Cell
    