import Product from "./Product";

export default function ProductList({ products }) {
    let newProduct=[];
    for(let i=0;i<10;i++){
        let random = Math.floor(Math.random() * products.length);
        var product = products[random];
        newProduct.push(product);
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