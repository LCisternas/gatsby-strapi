import React from "react"
import Layout from "../components/layout"
import useInicio from "../hooks/useInicio"
import styled from "@emotion/styled"

import ListadoPropiedades from "../components/listadoPropiedades"

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  img {
    width: 40%;
    margin: 3rem 0;
  }
  h1 {
    margin-top: 5rem;
  }
  @media all and (max-width: 1024px) {
    img {
      width: 90%;
    }
  }
`
const Parrafo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  p {
    line-height: 1.8;
  }
  @media all and (max-width: 1024px) {
    width: 90%;
  }
`

const IndexPage = () => {
  
  const inicio = useInicio()
  const { nombre, contenido, imagen } = inicio[0]

  return (
    <Layout>
      <Contenedor>
        <h1>{ nombre }</h1>
        <img src={ imagen } alt="imagen portada" />
        <Parrafo>
          <p>{ contenido }</p>
        </Parrafo>
        <ListadoPropiedades />
      </Contenedor>
    </Layout>
  )
}

export default IndexPage
