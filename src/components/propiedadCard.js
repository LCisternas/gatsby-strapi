import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
    border: 2px solid black;
    height: 500px;
    width: 400px;
    border-radius: 5px;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    @media all and (max-width: 480px) {
        width: 90%;
    }
`
const Titulo = styled.div`
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        text-align: center;
    }
`
const Imagen = styled.div`
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 90%;
    }
`
const Precio = styled.div`
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PropiedadCard = ({ propiedad }) => {

    const { nombre, precio, categoria, imagen } = propiedad

    return (
        <Card>
            <Titulo>
                <h2>{ nombre }</h2>
                <span>{ categoria }</span>
            </Titulo>
            <Imagen>
                <img src={ imagen } />
            </Imagen>
            <Precio>
                <h2>$ { precio } </h2>
            </Precio>
        </Card>
    );
}
 
export default PropiedadCard;