import React from 'react'

/*Los Hooks son una nueva incorporación en React 16.8. 
Te permiten usar estado y otras características de React sin escribir una clase.
*/

const FunctionComponent = ({nombre, tarea}) => {
    //desestructuracion
    return (
        <li>{nombre} traerá {tarea}</li>
    )
}

export default FunctionComponent