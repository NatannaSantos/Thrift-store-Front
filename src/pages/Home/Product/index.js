import { useNavigate } from "react-router-dom";
import { Container, StyledDescription, StyledImage } from "./style";
import AuthContext from "../../../contexts/AuthContext";
import { useContext } from "react";

export default function Product({ image, title, value, _id }) {
    
    const navigate = useNavigate();
    const {setSelectedProduct} = useContext(AuthContext);
    
    async function handleProductPage(id){
        setSelectedProduct(_id);
        navigate('/product');
    }

    
    return (
        <Container onClick={() => handleProductPage(_id)}>
            <StyledImage src={image} alt={title} />
            <StyledDescription>
                <span>R${value}</span>
                <p>{title}</p>
            </StyledDescription>
        </Container>
    );
}