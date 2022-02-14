import { Close, Container, StyledExit, StyledItens } from "./style";
import enter from '../../Assets/enter.svg';
import cart from '../../Assets/SmallCart.svg';
import request from '../../Assets/requests.svg';
import user from '../../Assets/user.svg';
import exit from '../../Assets/exit.svg';
import close from '../../Assets/Close.svg';
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Cart from "../Header/Cart";
import { useState } from "react";

export default function Menu({ tab, setTab }) {
    const [selected, setSelected] = useState(false);
    const { auth } = useAuth();
    const navigate = useNavigate();


    function handleClose() {
        setTab(false);
        return;
    }
    function handleLogin() {
        navigate('/login');
        return;
    }

    function handleExit(){
        document.location.reload(true);
        return;
    }
    function handleCart() {
        selected === false ? setSelected(true) : setSelected(!selected);
        return;
    }
    return (
        <>
        <Cart selected={selected}/>
        <Container tab={tab}>
            <StyledItens onClick={() => handleLogin()}>
                {auth ? <img src={user} alt="user" /> : <img src={enter} alt="enter" />}
                {auth ? <p>{auth.name}</p> : <p>Entrar</p>}
            </StyledItens>
            <StyledItens onClick={() => handleCart()}>
                <img src={cart} alt="cart" />
                <p>Carrinho</p>
            </StyledItens>
            <StyledItens>
                <img src={request} alt="cart" />
                <p>Pedidos</p>
            </StyledItens>
            <StyledExit onClick={()=>handleExit()}>
                {auth ? <img src={exit} alt="cart" /> : ''}
                {auth ? <p>Sair</p> : ''}
            </StyledExit>
            <Close src={close} alt="close" onClick={() => handleClose()} />

        </Container>
        </>
    );
}