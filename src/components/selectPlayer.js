import Square from './Square'
import Classes from './Style.module.css'
const SelectPlayer = (props) => {
    return ( 
        <div>
            <div className={Classes.Status}>Select Player</div>
                <Square onClick={props.Xclick}>X</Square>
                <Square onClick={props.Oclick}>O</Square>
        </div>
     );
}
 
export default SelectPlayer;