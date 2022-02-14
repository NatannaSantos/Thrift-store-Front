import styled from "styled-components";
import { BuyButton, ProductImage, Price } from "../../pages/Home/Product/ProductPage";
import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";
import Trash from '../../Assets/trash.svg';
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function Cart({selected}) {
    const { cart, setCart } = useContext(AuthContext);
    let cartSum = 0;
    const {auth} = useAuth();

    function handleDeleteCartItem(id) {
        const aux = [...cart];
        const index = aux.findIndex(x => x._id === id);
        aux.splice(index, 1);
        setCart(aux);
    }

    async function handleCheckout(sum, adress, name, id){
        if(!adress){
            alert("Faça login para fechar o pedido!");
            return
        }
        const listProducts = [];
        cart.map(product => listProducts.push(product.title));
        const config = {
            products: listProducts,
            value: sum,
            adress: adress,
            name: name,
            userId: id
        }
        const promise = await api.checkout(config);
        alert(promise.data);
    }

    return (
        <ContainerCart selected={selected}>
            <TitlePage>Carrinho</TitlePage>
            <Products>
                {cart.length === 0
                    ?

                    <h3>Seu carrinho está vazio</h3>

                    : ''
                }
                {cart.map(product => {
                    cartSum += parseInt(product.value);
                    return (
                        <ProductBox key={product._id}>
                            <ProductContainer>
                                <ProductImage image={product.image}></ProductImage>
                                <ProductInfo>
                                    <ProductTitle>{product.title} {product.title} {product.title}</ProductTitle>
                                    <Price>R$ {product.value},00</Price>
                                    <DeleteButton
                                        onClick={() => { handleDeleteCartItem(product._id) }}
                                        src={Trash}
                                    >
                                    </DeleteButton>
                                </ProductInfo>
                            </ProductContainer>
                        </ProductBox>
                    )
                })}
            </Products>
            {cart.length !== 0
                ?
                <>
                    <SubTotal>
                        <p>subtotal</p>
                        <span>R$ {cartSum},00</span>
                    </SubTotal>
                    <Adress>
                        <p>endereço</p>
                        <div>{auth?.adress}</div>
                    </Adress>
                </>

                : ''
            }
            <BuyButton disabled={cart.length === 0 ? true : false} onClick={() => handleCheckout(cartSum, auth?.adress, auth?.name, auth?._id)}>fechar pedido</BuyButton>
        </ContainerCart >
    );
}

const DeleteButton = styled.img`
    width: 20px;
    height: 29px;
    position: absolute;
    box-sizing: border-box;
    right: 0;
    bottom: 0;
    cursor: pointer;
`

const Adress = styled.div`
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: #F5F7F5;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 20px;
    & p {
        font-weight: 600;
        font-size: 24px;
    }
    & div {
        width: 100%;
        height: 100%;
    }
`

const SubTotal = styled.div`
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: #F5F7F5;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    & p {
        font-weight: 600;
        font-size: 24px;
    }
    & span {
        font-weight: 700;
        font-size: 18px;
    }
`

const ProductTitle = styled.p`
    width: 90%;
    height: 40px;
    line-height: 20px;
    font-weight: 600;
    text-transform: capitalize;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

`

const ProductInfo = styled.div`
    width: 100%;
    position: relative;
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr;
    box-sizing: border-box;
    align-items: end;
`
const ProductContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    box-sizing: border-box;
    grid-template-rows: 1fr;
    gap: 10px;
    padding: 15px;
    background-color: #F5F7F5;
`
const ProductBox = styled.li`
    list-style: none;
`

const Products = styled.ul`
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-sizing: border-box;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-inline-start: 0;
    ::-webkit-scrollbar {
        display: none;
    }
    & h3 {
        font-size: 24px;
        text-align: center;
        color: #555;
        margin-top: 40px;
    }
`


const TitlePage = styled.p`
    font-size: 24px;
    margin: 0;
`

const ContainerCart = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: grid;
    background-color: #fff;
    grid-template-rows: .5fr 2fr .5fr 1fr .5fr;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: 20px;
    box-sizing: border-box;
    gap: 20px;
    display: ${props => props.selected ? 'grid' : 'none'};
    position: fixed;
    right: 0;
    top: 70px;
    z-index: 2;
    `