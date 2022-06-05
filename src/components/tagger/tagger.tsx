import {Ul,Li} from './taggingStyle'
interface propsInterface{
    coordrinate:{
        x:Number;
        y:Number;
    };
    handleClick(e:React.MouseEvent<HTMLLIElement>):void;
    char:{
        waldo:boolean;
        wizard:boolean;
        odlaw:boolean;
    };
}
const Tagger = ({coordrinate,char,handleClick}:propsInterface)=>{
return(
    <div>
        <Ul left={coordrinate.x} top={coordrinate.y}>
            <Li disable = {char.waldo} onClick={handleClick}>waldo</Li>
            <Li disable = {char.wizard} onClick={handleClick}>wizard</Li>
            <Li disable = {char.odlaw} onClick={handleClick}>odlaw</Li>
        </Ul>
    </div>
)
}
export default Tagger;