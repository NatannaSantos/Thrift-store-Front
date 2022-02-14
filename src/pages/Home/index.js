import { useEffect, useState } from "react";
import Header from "../../components/Header";
import api from "../../services/api";
import ProductList from "./productList";
import { Categories, Category, Container, Products } from "./style";
import roupas from '../../Assets/roupas.jpg';
import calçados from '../../Assets/calçados.jpg';
import eletrônicos from '../../Assets/eletrônicos.jpg';
import casa from '../../Assets/casa.jpg'
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [products, setProducts] = useState(null);
    const navigate=useNavigate();

    function loadProducts() {
        const promise = api.products();
        promise.then(response => {
            setProducts(response.data);
        })
        promise.catch((error) => {
            console.log(error.response);
        }
        )
    }
    useEffect(loadProducts, []);

    if (products === null) {
        return "carregando...";
    }
    function handleHomeProducts(){
        navigate('/homeproducts');
        return;
    }
    function handleEletronics(){
        navigate('/eletronics');
        return;
    }
    function handleShoes(){
        navigate('/shoes');
        return;
    }
    function handleClothes(){
        navigate('/clothes');
        return;
    }


    return (
        <Container>
            <Header />
            <Categories>
                <Category onClick={()=>handleClothes()}>
                    <img src={roupas} alt="roupas"/>
                    <p>Roupas</p>
                </Category>
                <Category onClick={()=>handleShoes()}> 
                    <img src={calçados} alt="calçados" />
                    <p>Calçados</p>
                </Category>
                <Category onClick={()=>handleEletronics()}>
                    <img src={eletrônicos} alt="eletrônicos" />
                    <p>Eletrônicos</p>
                </Category>
                <Category onClick={()=>handleHomeProducts()}>
                    <img src={casa} alt="casa" />
                    <p>Casa</p>
                </Category>
            </Categories>
            <Products>
                <ProductList products={products} />
            </Products>
        </Container>
    );
}