import { StyledDescription, StyledProduct } from "../../../components/Categories/Categories";
import AuthContext from "../../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Product({ image, title, value, _id }) {
    const navigate = useNavigate();
    const { setSelectedProduct } = useContext(AuthContext);

    function handleProductPage(id) {
        setSelectedProduct(_id);
        navigate('/product');
    }

    return (
        <StyledProduct onClick={()=>handleProductPage(_id)}>
            <img src={image} alt={title} />
            <StyledDescription>
                <span>R${value}</span>
                <p>{title}</p>
            </StyledDescription>
        </StyledProduct>
    );
}