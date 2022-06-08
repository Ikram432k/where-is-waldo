import styled from "styled-components";

interface visible{
    visible:boolean
}
interface hide{
    hide:boolean
}

export const Div = styled.div<visible>`
    display: ${((props)=>props.visible ? 'flex' : 'none')};
    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.6);

`;
export const Form = styled.form<hide>`
    display: ${((props=>props.hide ? `none` : `flex`))} ;
    flex-direction: column;
    background-color: rgb(165,164,164);
    padding: 30px 50px; 
    justify-content: center;
    align-items: center;
    gap:10px;
    letter-spacing: 1.5px;
    border-radius:7px;

    h3{
    text-transform: uppercase;
    }

    input {
        margin-top: 1rem;
        font-size: 1.2rem;
        outline: none;
        border: none;
    }
    .btns{
        display:flex;
        justify-content: space-between;

    }
    button{
        cursor: pointer;
        text-transform: uppercase;
        border:0;
        color:white;
        margin-top:5px;
        margin-left:5px;
        background-color:black;
        padding:8px 10px;
        font-size:12px;
        letter-spacing: 1.5px;
        transition: 0.5s;
        border:0.5px solid black;
        border-radius:3px;

        &:hover{
            background-color:white;
            color:black;
        }
    }
`;