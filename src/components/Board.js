import React, { Component } from 'react'
import Square from './Square'
import Classes from './Style.module.css'
import ScoreCard from './scoreCard'
class Board extends Component {
    constructor(props){
        super(props)
        this.state={
            Oscore:0,
            Xscore:0,
            squares:Array(9).fill(null),
            previousTurn:this.props.yourTurn!=="X",
            xTurn:this.props.yourTurn==="X",
            reset:false,
            boardShow:true
        }
    }

    handleClick(i)
    {
        const squares=this.state.squares.slice()
        let winner=""
        if(squares[i] || findWinner(squares) || isDraw(squares))
        {
            return;
        }
        squares[i]=this.state.xTurn?'X':'O'
        this.setState(
            {
                squares:squares,
                xTurn:!this.state.xTurn
            })
        if(winner=findWinner(squares) || isDraw(squares))
        {
            let newOscore=this.state.Oscore+1
            let newXscore=this.state.Xscore+1
            let prevTurn=this.state.xTurn
            this.setState(
            {
                Oscore:winner==="O"?newOscore:this.state.Oscore,
                Xscore:winner==="X"?newXscore:this.state.Xscore,
                previousTurn:prevTurn,
                boardShow:false,
                xTurn:null,
                reset:true
            })
            console.log(this.state.xTurn)
        }
    }
    renderSquare(i){
        return <Square value={this.state.squares[i]} onClick={()=>{return this.handleClick(i)}}/>
    }
    render() {
        const winner=findWinner(this.state.squares);
        const draw=isDraw(this.state.squares);
        let status;
        if(winner)
        {
            status="Winner: "+winner;
            console.log("X: ",this.state.Xscore)
            console.log("O: ",this.state.Oscore)
        }
        else
        if(draw)
        {
            status="Draw";
        }
        return (
            <div>
                <div className={Classes.Status}>{status}</div>
                <ScoreCard xScore={this.state.Xscore} oScore={this.state.Oscore} xTurn={this.state.xTurn}/>
                {
                    this.state.boardShow?
                    (
                        <div className={Classes.Board}>
                            <div className={Classes.BoardRow}>
                                {this.renderSquare(0)}
                                {this.renderSquare(1)}
                                {this.renderSquare(2)}
                            </div>

                            <div className={Classes.BoardRow}>
                                {this.renderSquare(3)}
                                {this.renderSquare(4)}
                                {this.renderSquare(5)}
                            </div> 

                            <div className={Classes.BoardRow}>
                                {this.renderSquare(6)}
                                {this.renderSquare(7)}
                                {this.renderSquare(8)}
                            </div>
                        </div>
                    ):null
                }
                {
                    this.state.reset?
                    <div className={Classes.RXbtns}>
                        <div className={Classes.ResetBtn}>
                            <button onClick={()=>{
                                let Turn=!this.state.previousTurn
                                console.log("Turn: ",Turn)
                                console.log("xTurn",this.state.xTurn)
                                return this.setState({squares:Array(9).fill(null),
                                                                                xTurn:Turn,
                                                                                reset:false,
                                                                                boardShow:true
                                                                                })}}>RESTART</button>
                        </div>
                        <div className={Classes.Exit}>
                            <a onClick={this.props.clickExit}>
                                <span className={Classes.Left}>
                                <span className={Classes.CircleLeft}></span>
                                <span className={Classes.CircleRight}></span>
                                </span>
                                <span className={Classes.Right}>
                                <span className={Classes.CircleLeft}></span>
                                <span className={Classes.CircleRight}></span>
                                </span>
                            </a>
                        </div>
                    </div>
                    :
                    <br/>
                }
                
            </div>
        )
    }
}

export default Board


function findWinner(squares){
  const winConditions=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0;i<winConditions.length;i++){
        const [a,b,c]=winConditions[i];
        if(squares[a] && squares[a]===squares[b] && squares[b]=== squares[c] )
            return squares[a];
    }
    return null;
}

function isDraw(square){
    for(let i=0;i<9;i++)
    {
        if(square[i]==null)
        {
            return false;
        }
    }
    return true;
}