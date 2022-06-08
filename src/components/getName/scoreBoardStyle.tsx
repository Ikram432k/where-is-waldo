import styled from "styled-components";
interface hideornot{
    hide:boolean
}
export const Score = styled.div<hideornot>`
display: ${((props=>props.hide ? `flex` : `none`))} ;
flex-direction: column;
align-items: center;
background-color: rgb(195, 195, 195);
text-transform: uppercase;
letter-spacing: 1.5px;
border-radius:10px;
padding:3rem;
ul{
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: 100vh;
    padding:0;
}
.tableHead{
    background-color:black;
    color:white;
}
li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    border:1px solid black;
    background-color:rgb(169,169,169);
    color:white;
    padding:8px 10px;
    font-size:25px;
    transition: 0.5s;

}
.tableBody{
    &:hover{
        background-color:gary;
        color:black;
        cursor: pointer;

    }
}

@media only screen and (max-width:768px){
    ul{
    width:40vh;
    }
    li{
        font-size:15px;
    }

}

`;