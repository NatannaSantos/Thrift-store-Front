import styled from "styled-components";
import AuthContext from "../../../contexts/AuthContext.js";
import { useContext, useEffect} from "react";
import Header from "../../../components/Header/index.js";
import api from "../../../services/api.js";

export default function ProductPage() {

    const { cart, setCart, product, setProduct, selectedProduct } = useContext(AuthContext);

    function handleAddCart(product) {
        if (cart.length === 0) {
            setCart([...cart, product]);
            alert("Produto adicionado!");
        } else {
            let count = 0;
            cart.forEach(item => {
                if (item._id === product._id) {
                    console.log("Esse produto já se encontra no carrinho.");
                    count++;
                }
            });
            if (count !== 0) {
                return
            }
            alert("Produto adicionado!");
            setCart([...cart, product]);
        }
    }

    useEffect(()=> {
        handlerProduct(selectedProduct);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function handlerProduct(id){
        const productReturn = await api.getProduct(id);
        setProduct(productReturn.data);
    }

    return (
        <Container>
            <Header></Header>
            <ProductImage image={product.image}></ProductImage>
            <ProductDetails>
                <div>
                    <Price>
                        R$ {product.value},00
                    </Price>
                    <Title>
                        {product.title}
                    </Title>
                    <Description>
                        {product.description}
                    </Description>
                </div>
                <BuyButton onClick={() => handleAddCart(product)}>comprar</BuyButton> {/* substituir pelo ID do produto */}
            </ProductDetails>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 2fr 1fr;
    position: relative;
    top: 0;
`

export const ProductImage = styled.div`
    width: 100%;
    height: 100%;
    background: ${props => `url(${props.image})`};
    background-position: center;
    background-size: cover;
`
const ProductDetails = styled.div`
    box-sizing: border-box;
    padding: 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    & p {
        margin-bottom: 10px;
    }
`
export const Title = styled.p`
    font-weight: 600;
    text-transform: capitalize;
`
export const Price = styled.p`
    font-weight: 800;
`
export const Description = styled.p`
    max-height: 80px;
    font-weight: 400;
    overflow-y: scroll;
    text-transform: uppercase;
    ::-webkit-scrollbar {
        display: none;
    }
`
export const BuyButton = styled.button`
    width: 80%;
    margin: 0 auto;
    border-radius: 10px;
    border: none;
    background-color: #9BB19D;
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    padding: 15px 0;
    position: absolute;
    bottom: 20px;
    cursor: pointer;
    :disabled {
        background-color: #aaa;
        cursor: not-allowed;
    }
`