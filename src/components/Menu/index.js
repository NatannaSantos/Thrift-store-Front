import { Close, Container, StyledExit, StyledItens } from "./style";
import enter from '../../Assets/enter.svg';
import cart from '../../Assets/SmallCart.svg';
import request from '../../Assets/requests.svg';
import exit from '../../Assets/exit.svg';
import close from '../../Assets/Close.svg';

export default function Menu({ tab, setTab }) {

    function handleClose(){
        setTab(false);
        return;
    }
    return (
        <Container tab={tab}>
            <StyledItens>
                <img src={enter} alt="enter" />
                <p>Entrar</p>
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
                <img src={exit} alt="cart" />
                <p>Sair</p>
            </StyledExit>
            <Close src={close} alt="close" onClick={()=>handleClose()}/>
            
        </Container>
    );
}