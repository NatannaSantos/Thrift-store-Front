import { Close, Container, StyledExit, StyledItens } from "./style";
import enter from '../../Assets/enter.svg';
import cart from '../../Assets/SmallCart.svg';
import request from '../../Assets/requests.svg';
import user from '../../Assets/user.svg';
import exit from '../../Assets/exit.svg';
import close from '../../Assets/Close.svg';
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Menu({ tab, setTab }) {
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
    return (
        <Container tab={tab}>
            <StyledItens onClick={() => handleLogin()}>
                {auth ? <img src={user} alt="user" /> : <img src={enter} alt="enter" />}
                {auth ? <p>{auth.name}</p> : <p>Entrar</p>}
            </StyledItens>
            <StyledItens>
                <img src={cart} alt="cart" />
                <p>Carrinho</p>
            </StyledItens>
            <StyledItens>
                <img src={request} alt="cart" />
                <p>Pedidos</p>
            </StyledItens>
            <StyledExit>
                {auth ? <img src={exit} alt="cart" /> : ''}
                {auth ? <p>Sair</p> : ''}
            </StyledExit>
            <Close src={close} alt="close" onClick={() => handleClose()} />

        </Container>
    );
}