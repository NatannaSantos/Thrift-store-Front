import Product from "./Product";

export default function ProductList({ products }) {

    let newProduct = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].type === "eletronics") {
            newProduct.push(products[i]);
        }
    }


    return (

        newProduct.map((product) => (
            <Product
                key={product._id}
                {...product}
            />
        ))

    )
}