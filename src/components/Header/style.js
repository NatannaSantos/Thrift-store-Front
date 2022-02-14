import styled from "styled-components";

const Container = styled.header`
  width: 100vw;
  height: 90px; 
  display: flex;
  align-items: center;
  justify-content: space-evenly;     

  position: fixed;
  top: 0px;
  z-index: 1;

  background: #9BB19D;
  
  & > img {
    cursor: pointer;
    margin-left: 18px;
    margin-right: 18px;
  }
  @media (max-width: 700px) {
  width: 100%;
}
`;
const StyledCart=styled.div`
width: 80px;
height: 90px;
border-top-left-radius: 20px;
display: flex;
align-items: center;
cursor: pointer;
background-color: ${props=>props.selected===false? "#9BB19D": "#FFFFFF"};
`
export {
    Container,
    StyledCart
}