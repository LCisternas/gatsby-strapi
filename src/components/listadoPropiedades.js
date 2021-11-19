import React from 'react';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadCard from './propiedadCard';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Contenedor = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    @media all and (max-width: 1024px) {
        width: 100%;
    }
`

const ListadoPropiedades = () => {

    const propiedades = usePropiedades()

    return (
        <>
            <h1 css={css`
                margin: 5rem 0;
            `}>Propiedades</h1>
            <Contenedor>
                {propiedades.map(propiedad => (
                    <PropiedadCard 
                        key={ propiedad.id }
                        propiedad={ propiedad }
                    />                    
                ))}
            </Contenedor>
        </>    
    );
}
 
export default ListadoPropiedades;