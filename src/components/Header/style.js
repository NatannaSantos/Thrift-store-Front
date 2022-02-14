import styled from "styled-components";

const Container = styled.header`
  width: 99%;
  height: 90px; 
  display: flex;
  align-items: center;
  justify-content: space-evenly;     

  position: fixed;
  top: 0px;
  z-index: 1;

  background: #9BB19D;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  & > img {
    cursor: pointer;
    margin-left: 18px;
    margin-right: 18px;
  }
  @media (max-width: 700px) {
  width: 100%;
}
`
export {
    Container,
}