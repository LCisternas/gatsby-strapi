import { useStaticQuery, graphql } from 'gatsby';

const usePropiedades = () => {
    const resultado = useStaticQuery(
        graphql`
        query {
            allStrapiPropiedades {
                nodes {
                    id
                    nombre
                    precio
                    descripcion
                    habitaciones
                    estacionamiento
                    wc
                    agentes {
                        nombre
                        email
                        telefono
                    }
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
        id: propiedad.id,
        nombre: propiedad.nombre,
        precio: propiedad.precio,
        categoria: propiedad.categorias.nombre,
        imagen: propiedad.imagen.localFile.childImageSharp.gatsbyImageData.images.fallback.src,
        descripcion: propiedad.descripcion,
        habitaciones: propiedad.habitaciones,
        estacionamiento: propiedad.estacionamiento,
        wc: propiedad.wc,
        nombreAgente: propiedad.agentes.nombre,
        telefonoAgente: propiedad.agentes.telefono,
        emailAgente: propiedad.agentes.email
    }))
}

export default usePropiedades