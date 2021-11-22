import React from "react"
import Layout from "../components/layout"
import useInicio from "../hooks/useInicio"
import styled from "@emotion/styled"
import hero from '../images/hero.jpg'

import ListadoPropiedades from "../components/listadoPropiedades"

const Hero = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${hero});
  height: 100vh;
  background-position: center;
  background-size: cover;
`
const HeroContent = styled.div`
  height: 100%;
  max-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 2rem;
    color: white;
    font-size: 4rem;
  }
  h2 {
    margin: 0;
    color: white;
    border-bottom: 3px solid white;
    padding-bottom: .3rem;
  }
  @media all and (max-width: 768px) {
    h1 {
      text-align: start;
      margin: 2rem;
      margin-bottom: 3rem;
    }
    h2 {
      text-align: start;
      font-size: 2rem;
      margin: 0 2rem;
      border-bottom: 2px solid white;
    }
  }
`
const Propiedades = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`

const IndexPage = () => {
  
  const inicio = useInicio()
  const { nombre, contenido } = inicio[0]

  return (
    <Layout>
      <Hero>
        <HeroContent>
          <h1>{ nombre }</h1>
          <h2>{ contenido }</h2>
        </HeroContent>
      </Hero>

      <Propiedades>
        <ListadoPropiedades />
      </Propiedades>
    </Layout>
  )
}

export default IndexPage
