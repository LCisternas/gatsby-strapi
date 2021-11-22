import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

export const query = graphql`
    query($id: String!) {
        allStrapiPropiedades( filter: { id: { eq: $id } } ) {
            nodes {
                nombre
                precio
                estacionamiento
                wc
                descripcion
                habitaciones
                agentes {
                    nombre
                    email
                    telefono
                }
                categorias {
                    nombre
                }
                imagen {
                    localFile{
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    }
`
const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    @media all and (min-width: 1025px) {
        flex-direction: row;
    }
`
const Presentacion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
        width: 90%;
        margin-bottom: 5rem;
    }
    span {
        margin-bottom: 2rem;
        font-weight: 700;
    }
    @media all and (min-width: 1025px) {
        width: 40%;
    }
`
const Informacion = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    h2 {
        text-align: center;
    }
    h3 {
        margin-left: 1.5rem;
    }
    @media all and (min-width: 1025px) {
        width: 60%;
    }
`
const Caracteristicas = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    p {
        font-size: 2rem;
    }
`
const Descripcion = styled.p`
    margin: 2rem;
    line-height: 1.5;
`

const DinamicPropiedad = ({ data: { allStrapiPropiedades: { nodes } } }) => {

    const { nombre, precio, descripcion, estacionamiento, wc, habitaciones, agentes, categorias } = nodes[0]
    const imagen = nodes[0].imagen.localFile.childImageSharp.gatsbyImageData.images.fallback.src

    return (
        <Layout>
            <Contenedor>
                <Presentacion>
                    <h1>{ nombre }</h1><span>{ categorias.nombre }</span>
                    <img src={ imagen } alt="portada propiedad" />
                </Presentacion>

                <Informacion>
                    <h2>Precio : $ { precio }</h2>
                    <Caracteristicas>
                        <p><i className="fas fa-door-open"></i> { habitaciones }</p>
                        <p><i className="fas fa-car"></i> { estacionamiento }</p>
                        <p><i className="fas fa-toilet"></i> { wc }</p>
                    </Caracteristicas>
                    <h3>Agente de venta : { agentes.nombre }</h3>
                    <h3>Email Contacto : { agentes.email }</h3>
                    <h3>Telefono : { agentes.telefono }</h3>
                    <h2>Descripcion</h2>
                    <Descripcion>{ descripcion }</Descripcion>
                </Informacion>
            </Contenedor>
        </Layout>
    );
}
 
export default DinamicPropiedad;