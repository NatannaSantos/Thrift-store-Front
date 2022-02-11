import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container.js"
import { Button, Form, Input, StyledLink } from "../../components/FormComponents/FormComponents.js"
import Logo from "../../components/Logo/Logo.js";
import useAuth from "../../hooks/useAuth.js";
import api from "../../services/api";

export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
    const { auth, login } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth && auth.token) {
            navigate("/");
        }
    }, []);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        try {
            const { data } = await api.login({ ...formData });
            setIsLoading(false);

            login(data);

            navigate("/");
        } catch (error) {
            setIsLoading(false);
            alert('Erro ao fazer login');
        }

    }
    return (
        <Container>
            <Logo>
                <h1>Thrift</h1>
                <h2>store</h2>
            </Logo>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    disabled={isLoading}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    disabled={isLoading}
                    required
                />
                <Button type="submit" disabled={isLoading}>
                    Entrar
                </Button>
            </Form>

            <StyledLink to="/register">Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    )
}