import styled from "styled-components";
interface coordInterface{
    left:Number
    top:Number
}
interface liInterface{
  disable: boolean;
}

export const Ul = styled.div<coordInterface>`
position:absolute;
display:${(props)=>(props.left ? 'block':'none')};
left:${(props)=>(props.left ? `${props.left}px`:`0`)};
top:${(props)=>(props.top ? `${props.top}px`:`0`)};
background-color:transparent;
list-style:none;
margin:0;
padding:0;
margin-top:0.5rem;
div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    background-color: transparent;
    border: 0.2rem solid black;
    border-radius: 1.5rem;
  }
`;
export const Li = styled.li<liInterface>`
  display: ${(props)=>(props.disable ? `none` : `flex` )};
  justify-content:center;
  margin-top:1px;
  padding:3px;
  cursor: pointer;
  color:white;
  background-color: black;
  text-transform:uppercase;
  font-size:15px;
  letter-spacing:1.5px;
  &:hover {
    background-color:white;
    color:black;    }

`;
