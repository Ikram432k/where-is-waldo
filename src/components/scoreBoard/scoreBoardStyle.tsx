import styled from "styled-components";
interface hideornot{
    hide:boolean
}
export const Div = styled.div<hideornot>`
display: ${((props=>props.hide ? `flex` : `none`))} ;
`;