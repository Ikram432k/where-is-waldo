import styled from "styled-components";
interface showInterface{
    show:boolean;
}
export const Div = styled.div`
    display: ${(props:showInterface)=>(props.show ? `flex`: `none`)};
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;

    img{
        // margin: 5px;
        // max-width: 150px;
        max-height: 150px;
        margin-bottom: 5px;
    }
    .imgs{
        display:flex;

    }
    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid black; 
        letter-spacing: 1.5px;
        text-transform: uppercase;

    }
    @media only screen and (max-width:768px){
        div{
            padding:10px 20px;
            font-size:20px;
        }
    
    }
    `;
    export const Maindiv = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
        background-color: white;
        height:auto;
        gap:10px;
        padding:20px 40px;
        border-radius:5px;
        font-size:25px;
        `;
    export const Button = styled.button`
        cursor: pointer;
        text-transform: uppercase;
        border:0;
        color:white;
        margin-top:5px;
        background-color:black;
        padding:8px 10px;
        font-size:20px;
        letter-spacing: 1.5px;
        transition: 0.5s;
        border:0.5px solid black;
        border-radius:3px;

        &:hover{
            background-color:white;
            color:black;
        }
    `;