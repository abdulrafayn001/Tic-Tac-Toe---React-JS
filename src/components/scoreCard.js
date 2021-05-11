import Square from './Square'
import Classes from './Style.module.css'
const ScoreCard = (props) => {
    const Score={
        color: "whitesmoke",
        fontSize: "50px",
        fontFamily: "'Coda Caption', sans-serif",
        fontFamily: "'Luckiest Guy', cursive",
        marginTop: "5px"
    }

    const Style={
        color: "#39ff14",
        fontSize: "50px",
        fontFamily: "'Coda Caption', sans-serif",
        fontFamily: "'Luckiest Guy', cursive",
        marginTop: "5px"
    }
    return ( 
        <div>
            <Square active={true}>X</Square>
            {props.xTurn===true?<span className={Classes.Score}>&#8594;</span>:null}
            <span style={props.xTurn===true?Style:Score}> {props.xScore}</span>
            <Square>O</Square>
            {props.xTurn===false?<span className={Classes.Score}>&#8594;</span>:null}
            <span style={props.xTurn===false?Style:Score}>{props.oScore}</span>
        </div>
     );
}
 
export default ScoreCard;
