import menu from "../../Assets/icons8-menu.svg";
import cart from "../../Assets/Cart.svg";
import { SmallLogo } from "../Logo/SmallLogo";
import { Container, StyledCart } from "./style";
import { useState } from "react";
import Menu from "../Menu";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";

export default function Header() {
    const [tab, setTab] = useState(false);
    const [selected, setSelected] = useState(false);
    const navigate = useNavigate();

    function handleMenu() {

        setTab(true);
        return;
    }

    function handleCart() {
        selected === false ? setSelected(true) : setSelected(!selected);
        return;
    }

    return (
        <>
            <Cart selected={selected}></Cart>
            <Container>
                <img src={menu} alt="menu" onClick={() => handleMenu()} />
                <Menu tab={tab} setTab={setTab} />
                <SmallLogo onClick={() => navigate('/')}>
                    <h1>Thrift</h1>
                    <h2>store</h2>
                </SmallLogo>
                <StyledCart selected={selected} onClick={() => handleCart()}>
                    <img src={cart} alt="carrinho" />
                </StyledCart>
            </Container>
        </>
    );
}
