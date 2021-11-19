import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import urlSlug from 'url-slug';

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
        color: #722F37;
    }
`
const Informacion = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 40%;
    border: 2px solid #722F37;
    border-radius: 5px;
    background-color: #722F37;
    color: white;
    font-weight: 700;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: #722F37;
    }
    @media all and (max-width: 480px) {
        height: 80%;
        text-align: center;
    }
`

const PropiedadCard = ({ propiedad }) => {

    const { nombre, precio, imagen } = propiedad

    return (
        <Card>
            <Imagen>
                <img src={ imagen } alt="imagen propiedad" />
            </Imagen>
            <Titulo>
                <h2>{ nombre }</h2>
                {/* <span>{ categoria }</span> */}
            </Titulo>
            <Precio>
                <h2>$ { precio } </h2>
                <Informacion to={ urlSlug( nombre ) } >Mas informacion</Informacion>
            </Precio>
        </Card>
    );
}
 
export default PropiedadCard;