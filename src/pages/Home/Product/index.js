import { Container, StyledDescription, StyledImage } from "./style";

export default function Product({ image, title, value }) {
    return (
        <Container>
            <StyledImage src={image} alt={title} />
            <StyledDescription>
                <span>R${value}</span>
                <p>{title}</p>
            </StyledDescription>
        </Container>
    );
}