import { StyledDescription, StyledProduct } from "../../../components/Categories/Categories";

export default function Product({ image, title, value }) {
    return (
        <StyledProduct>
            <img src={image} alt={title} />
            <StyledDescription>
                <span>R${value}</span>
                <p>{title}</p>
            </StyledDescription>
        </StyledProduct>
    );
}