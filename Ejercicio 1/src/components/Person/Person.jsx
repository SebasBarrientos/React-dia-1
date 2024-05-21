import React from 'react'

const Person = (props) => {
  return (
    <div>
        <h1>Nuestro Dios: {props.name} </h1>
        <h2>El Gran y unico {props.surname}</h2>
        <span>Existe hace mas de {props.age}</span>
    </div>
  )
}

export default Person