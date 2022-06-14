import React from 'react'
import {toast} from 'react-toastify'
import { Container } from '../../styles/GlobalStyles'
import { Title } from './styled';

export default function Login() {
    return (
        toast.info('Bem-vindo'),
        <Container>
        <Title>
            Login
            <small>Oi</small>
        </Title>
            <p>Lorem ipsum dolor sit amet.</p>
            <button type="button">Enviar</button>
        </Container>
    )
}