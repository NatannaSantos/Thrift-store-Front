import styled from 'styled-components';

const Container=styled.div`
width:100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #9BB19D;
padding: 25px;

@media (max-width: 700px) {
  width: 100%;
  }
`
export default Container;