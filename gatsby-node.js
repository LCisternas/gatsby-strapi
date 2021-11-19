const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const consulta = await graphql(`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          id
        }
      }
    }
  `)
    
    if(consulta.errors) {
      reporter.panic('No hubo respuesta', consulta.errors)
    }

    const propiedades = consulta.data.allStrapiPropiedades.nodes
    
    propiedades.forEach(propiedad => {
      actions.createPage({
        path: urlSlug( propiedad.nombre ),
        component: require.resolve('./src/components/dinamicPropiedad.js')
      })
    })

}