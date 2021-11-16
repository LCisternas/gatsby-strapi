import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const HeaderPage = styled.header`
    background-color: #722F37;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 768px) {
        flex-direction: column;
        padding: 2.5rem;
    }
`
const Logo = styled(Link)`
    font-size: 2.6rem;
    font-weight: 700;
`
const Enlaces = styled(Link)`
    padding: .5rem;
    &:last-of-type {
        padding: 0;
    }
    @media all and (max-width: 768px) {
        margin: 0 .5rem;
    }
`
const Navegacion = styled.nav`
    padding: 0 8rem;
    @media all and (max-width: 768px) {
        margin-top: 1.5rem;
        padding: 0;
    }
`

const Header = () => {
    return (
        <HeaderPage>
            <div css={css`
                padding: 0 8rem;
                @media all and (max-width: 768px) {
                    padding: 0;
                }
            `}>
                <Logo to={'/'} >Bienes Raices</Logo>
            </div>
            
            <Navegacion>
                <Enlaces to={'/'} >Inicio</Enlaces>
                <Enlaces to={'/nosotros'} >Nosotros</Enlaces>
                <Enlaces to={'/propiedades'} >Propiedades</Enlaces>
            </Navegacion>
        </HeaderPage>
    );
}
 
export default Header;