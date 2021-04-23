import React, { Component } from 'react'
import Style from './Classes.module.css'
class Square extends Component {
    constructor(props){
        super(props)

        this.state={
            value:null
        }
    }
    render() {
        return (
            <button className={Style.Square} onClick={()=>this.setState({value:'X'})}>
                {this.state.value}
            </button>
        )
    }
}

export default Square
