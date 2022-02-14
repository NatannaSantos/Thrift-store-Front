import { useEffect, useState } from "react";
import { Container, Products, Title } from "../../components/Categories/Categories";
import Header from "../../components/Header";
import api from "../../services/api";
import ProductList from "./ProductList";

export function Eletronics() {
    const [products, setProducts] = useState(null);

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
    return (
        <Container>
            <Header />
            <Title>Eletrônicos</Title>
            <Products>
                <ProductList products={products} />
            </Products>
        </Container>
    );
}