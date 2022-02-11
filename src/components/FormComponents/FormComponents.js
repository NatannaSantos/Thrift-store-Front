import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Form=styled.form`
 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 12px;

margin-bottom: 32px;

@media (max-width: 700px) {
  width: 100%;
}
`;
const Input=styled.input`
width: 326px;
height: 58px;
background-color: #FFFFFF;
box-sizing: border-box;
padding-left:10px;
border:none;
border-radius: 5px;
outline: 0;
font-size: 20px;
font-family: 'Baloo Tamma 2', cursive;

::placeholder{
    font-family: 'Baloo Tamma 2', cursive;
    color: black;
}
`;

const Button=styled.button`
width: 326px;
height: 58px;
font-size: 20px;
font-weight: 700;
border-radius: 5px;
border:none;
color:#FFFFFF;
display: flex;
background-color: #2E8B57;
align-items: center;
justify-content: center;
`
const StyledLink = styled(Link)`
font-size: 15px;
font-weight: 700;
color:#FFFFFF;
text-decoration: none;
;
`

export {
    Form,
    Input,
    Button,
    StyledLink
}