import React, { Component } from 'react'
import Square from './Square'
import Classes from './Style.module.css'
class Board extends Component {
    constructor(props){
        super(props)

        this.state={
            squares:Array(9).fill(null),
            xTurn:true,
            showBorad:true
        }
    }

    handleClick(i)
    {
        const squares=this.state.squares.slice()
        
        if(findWinner(this.state.squares) || squares[i])
        {
            return;
        }
        squares[i]=this.state.xTurn?'X':'O'
        this.setState(
            {
                squares:squares,
                xTurn:!this.state.xTurn
            })
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
        }
        else
        if(draw)
        {
            status="Draw";
        }
        else
        {
            status="Next Player: "+(this.state.xTurn?'X':'O');
        }
        return (
            <div>
                <div className={Classes.Status}>{status}</div>
                {this.state.showBorad?
                    <div>
                        <div className="board-row">
                            {this.renderSquare(0)}
                            {this.renderSquare(1)}
                            {this.renderSquare(2)}
                        </div>

                        <div className="board-row">
                            {this.renderSquare(3)}
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                        </div> 

                        <div className="board-row">
                            {this.renderSquare(6)}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
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