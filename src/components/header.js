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
    font-size: 2.8rem;
    font-weight: 700;
`
const Enlaces = styled(Link)`
    padding: .5rem;
    margin-right: 1rem;
    font-weight: 600;
    &:last-of-type {
        padding: 0;
        margin-right: 0;
    }
    &.paginaActual {
        border-bottom: 2px solid white;
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
                <Logo to={'/'} > Bienes Raices </Logo>
            </div>

            <Navegacion>
                <Enlaces activeClassName='paginaActual' to={'/'} >Inicio</Enlaces>
            </Navegacion>
        </HeaderPage>
    );
}
 
export default Header;