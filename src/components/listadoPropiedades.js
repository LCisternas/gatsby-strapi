import React from 'react';
import usePropiedades from '../hooks/usePropiedades';

const ListadoPropiedades = () => {

    const propiedades = usePropiedades()
    const { nombre, precio, categoria, imagen } = propiedades
    console.log(propiedades)

    return (
        <div>
            
        </div>
    );
}
 
export default ListadoPropiedades;