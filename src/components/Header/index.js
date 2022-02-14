import menu from "../../Assets/icons8-menu.svg";
import cart from "../../Assets/Cart.svg";
import { SmallLogo } from "../Logo/SmallLogo";
import { Container } from "./style";
import { useState } from "react";
import Menu from "../Menu";

export default function Header() {
    const [tab, setTab] = useState(false);

    function handleMenu() {

        setTab(true);
        return;
    }

    console.log(tab);
    return (
        <Container>
            <img src={menu} alt="menu" onClick={() => handleMenu()} />
            <Menu tab={tab} setTab={setTab}/>
            <SmallLogo>
                <h1>Thrift</h1>
                <h2>store</h2>
            </SmallLogo>
            <img src={cart} alt="carrinho" />
        </Container>
    );
}
