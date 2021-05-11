import classes from './Style.module.css'
import React, { Component } from 'react'
import Board from './Board'
import Main from './main'
class Game extends Component {
    render() {
        return (
            <div className={classes.Game}>
                <Main/>
                {/* <div><Board/></div>     */}
            </div>
        )
    }
}

export default Game
