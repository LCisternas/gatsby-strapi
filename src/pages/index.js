import React from "react"
import Layout from "../components/layout"
import useInicio from "../hooks/useInicio"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
 
const Image = styled.img`
  
`

const IndexPage = () => {
  
  const inicio = useInicio()
  const { nombre, contenido, imagen } = inicio[0]

  console.log(imagen)

  return (
    <Layout>
      <h1>{ nombre }</h1>
      <p>{ contenido }</p>
      <Image src={imagen} alt="imagen inicio" />
    </Layout>
  )
}

export default IndexPage
