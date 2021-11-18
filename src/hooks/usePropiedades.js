import { useStaticQuery, graphql } from 'gatsby';

const usePropiedades = () => {
    const resultado = useStaticQuery(
        graphql`
        query {
            allStrapiPropiedades {
                nodes {
                    nombre
                    precio
                    categorias {
                        nombre
                    }
                    imagen {
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
        `
    )
    return resultado.allStrapiPropiedades.nodes.map(propiedad => ({
        nombre: propiedad.nombre,
        precio: propiedad.precio,
        categoria: propiedad.categorias.nombre,
        imagen: propiedad.imagen.localFile.childImageSharp.gatsbyImageData.images.fallback.src
    }))
}

export default usePropiedades