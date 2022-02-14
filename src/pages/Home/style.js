import styled from "styled-components";

const Container=styled.div`
width:100vw;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #E5E5E5;


@media (max-width: 500px) {
  width: 100%;
  flex-direction: column; 
  justify-content: center;
  }
`
const Products=styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

@media (max-width: 500px) {
  width: 100%;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  }
`;
const Categories=styled.div`
width: 100vw;
margin-top: 120px;
margin-bottom: 25px;
display: flex;
justify-content: space-evenly;
`
const Category=styled.div`
width: 120px;
height: 120px;
display: flex;
align-items: center;
flex-direction: column;

img{
  width:80px;
  height:80px;
  border-radius: 50%;
}
`
export {
  Container,
  Products,
  Categories,
  Category
}