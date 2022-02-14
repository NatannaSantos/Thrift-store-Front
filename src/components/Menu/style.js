import styled from "styled-components";

const Container=styled.div`
width:244px;
height: 667px;
background-color: #FFFFFF;
color:#000000;
display: ${props=> props.tab===false? "none" : "flex"};
justify-content: center;
flex-direction: column;
position: fixed;
z-index:2;
top:0;
left:0;
padding: 20px;
`
const StyledItens=styled.div`
font-size:24px;
font-weight: 600;
display: flex;
align-items: center;
cursor:pointer;

img{
    width: 36px;
    height:36px;
    margin-right: 10px;
    
}
`;

const StyledExit=styled.div`
font-size:24px;
font-weight: 600;
margin-top: 100px;
display: flex;
cursor:pointer;

img{
    margin-right: 10px;
}
`
const Close=styled.img`
position: absolute;
top: 0;
right: 0;
z-index: 1;
`

export{
    Container,
    StyledItens,
    StyledExit,
    Close
}