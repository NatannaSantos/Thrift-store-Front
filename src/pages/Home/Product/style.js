import styled from "styled-components";

const Container=styled.div`
width:160px;
height:210px;
background-color: #FFFFFF;
border-radius: 5px;
margin-bottom: 15px;
margin-right: 15px;
`;

const StyledImage=styled.img`
width:160px;
height: 160px;
border-radius: 5px;
`

const StyledDescription=styled.div`
width:160px;
height:50px;

span{
    font-size: 15px;
    font-weight: 600;
    margin:0;
}
p{
 font-size:12px;
 text-align: center;
 margin:0;
}
`


export{
    Container,
    StyledDescription,
    StyledImage
}