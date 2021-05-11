import React, { Component } from 'react'
import Classes from './Style.module.css'
import HumanVsHuman from './human'
import Computer from './computer'
class Main extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            playGame:undefined
         }
    }

    clickHumanBtn=()=>{
        this.setState({
            playGame:true
        })
    }

    clickAIBtn=()=>{
        this.setState({
            playGame:false
        })
    }

    clickExit=()=>{
        this.setState({
            playGame:undefined
        })
    }

    render() { 
        return (
            this.state.playGame===undefined?(
                <div className="Main">
                    <div className={Classes.Status}>Tic Tac Toe</div>
                    <div className={Classes.MainBtn}>
                        <button onClick={this.clickHumanBtn}>Two Player</button>
                    </div>
                    <div className={Classes.MainBtn}>
                        <button onClick={this.clickAIBtn}>One Player</button>
                    </div>
                    <div>
                        <p className={Classes.Credit}>By Abdulrafay</p>
                    </div>
                </div>
            ):(this.state.playGame===true?<HumanVsHuman clickExit={this.clickExit}/>:<Computer/>)
         );

         
    }
}
 
export default Main;