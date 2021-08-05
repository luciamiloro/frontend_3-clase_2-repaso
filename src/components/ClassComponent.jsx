import React, { Component } from 'react'

/* Un class component es muy similar a la estructura de una class en JS. 
Para poder utilizar este estilo de componente, debemos traernos de React, {Component}. 
Si miran, dice que se extiende nuestro componente de Component, es decir, 
heredamos sus funciones y caracteristicas.
*/

export default class ClassComponent extends Component {
    render() {
        const {nombre , estaEnLista} = this.props // desestructuración
        return (
            <li>{nombre} {!estaEnLista && "no "}esta invitado a la fiesta</li>
        )
    }
}