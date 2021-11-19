import React from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
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
    justify-content: space-evenly;
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
        width: 100%;
    }
`
const Precio = styled.div`
    height: 15%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    h2 {
        color: #85bb65;
    }
`
const Informacion = styled.button`
    height: 60%;
    width: 40%;
    border: 2px solid #85bb65;
    border-radius: 5px;
    background-color: white;
    color: #85bb65;
    font-weight: 700;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        background-color: #85bb65;
        color: white;
    }
`

const PropiedadCard = ({ propiedad }) => {

    const { nombre, precio, imagen } = propiedad

    return (
        <Card>
            <Imagen>
                <img src={ imagen } />
            </Imagen>
            <Titulo>
                <h2>{ nombre }</h2>
                {/* <span>{ categoria }</span> */}
            </Titulo>
            <Precio>
                <h2>$ { precio } </h2>
                <Informacion>Mas informacion</Informacion>
            </Precio>
        </Card>
    );
}
 
export default PropiedadCard;