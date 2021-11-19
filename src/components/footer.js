import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const FooterPage = styled.header`
    background-color: #722F37;
    padding: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 768px) {
        flex-direction: column;
        padding: 5rem;
    }
`
const Logo = styled(Link)`
    font-size: 3.6rem;
    font-weight: 700;
    @media all and (max-width: 280px) {
        font-size: 3rem;
    }
`
const Contacto = styled.p`
    padding: .5rem;
    margin: 1.5rem 0;
    font-weight: 600;
    color: white;
    text-align: center;
    &.paginaActual {
        border-bottom: 2px solid white;
    }
    @media all and (max-width: 768px) {
        margin: 1rem 0;
    }
`
const Navegacion = styled.nav`
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media all and (max-width: 768px) {
        margin-top: 1.5rem;
        padding: 0;
    }
`

const Footer = () => {
    return (
        <FooterPage>
            <div css={css`
                padding: 0 2rem;
                text-align: center;
                @media all and (max-width: 768px) {
                    padding: 0;
                }
            `}>
                <Logo to={'/'} > Bienes Raices </Logo>
            </div>

            <Navegacion>
                <Contacto >correo@correo.com</Contacto>
                <Contacto >+569 68xx xxx</Contacto>
                <Contacto >Direccion Av.Providencia, Santiago de Chile</Contacto>
            </Navegacion>
        </FooterPage>
    );
}
 
export default Footer;