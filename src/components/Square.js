import Classes from './Style.module.css'
const Square = (props) => {
    return (
        <button className={Classes.Square} onClick={props.onClick}>
            {props.children!==undefined?props.children:(props.value===null?".":props.value)}
        </button>
     );
}
 
export default Square;