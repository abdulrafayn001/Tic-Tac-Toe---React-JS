import React, { Component } from 'react'
import Board from './Board'
import SelectPlayer from './selectPlayer'
class HumanVsHuman extends Component {
    
    constructor(props)
    {
        super(props)
        this.state = { 
            yourPlayer:""
         }
    }
    Xclick=()=>{
        this.setState({
            yourPlayer:"X"
        })
    }

    Oclick=()=>{
        this.setState({
            yourPlayer:"O"
        })
    }
    render() { 
        return ( 
            <div>
                {this.state.yourPlayer===""?<SelectPlayer Xclick={this.Xclick} Oclick={this.Oclick}/>:<Board clickExit={this.props.clickExit} yourTurn={this.state.yourPlayer}/>}
            </div>
         );
    }
}
 
export default HumanVsHuman;