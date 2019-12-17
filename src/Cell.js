import React, { Component } from 'react'

export default class Cell extends Component {
    constructor(props){
        super()
        this.state ={
            color: props.value,
        }

    }
    event = (e) =>{
        this.setState({color:e})      
    }

    render() {
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={() => this.event('#333')}
            >

            </div>
        )
    }
}