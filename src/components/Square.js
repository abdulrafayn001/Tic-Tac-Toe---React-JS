import Classes from './Style.module.css'
const Square = (props) => {
    return (
        //<div className={Classes.Square} onClick={props.onClick}>{props.value===null?".":props.value}</div>
        <button className={Classes.Square} onClick={props.onClick}>
            {props.value===null?".":props.value}
        </button>
     );
}
 
export default Square;