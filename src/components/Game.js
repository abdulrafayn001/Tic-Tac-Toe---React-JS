import classes from './Style.module.css'
import React, { Component } from 'react'
import Board from './Board'

class Game extends Component {
    render() {
        return (
            <div className={classes.Game}>
                <div><Board/></div>    
            </div>
        )
    }
}

export default Game
