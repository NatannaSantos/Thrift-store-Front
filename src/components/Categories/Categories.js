import styled from "styled-components";

const Container = styled.div`
width:100vw;
height:100%;
background-color: #E5E5E5;
color:#000000;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 18px;
gap:10px;
`;
const Products = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap:10px;
`;
const StyledProduct = styled.div`
width:160px;
height:215px;
background-color: #FFFFFF;
border-radius: 5px;
overflow: hidden;
color:#000000;
img{
    width:160px;
    height:160px;
    border-radius:5px;
}
`;
const StyledDescription = styled.div`
width:160px;
height:50px;
color:#000000;
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
` ;

const Title = styled.div`
font-size: 30px;
font-weight: 700;
padding-top: 100px;
`

export {
    Container,
    Products,
    StyledProduct,
    StyledDescription,
    Title
}