import React from 'react'

const Home = (props) => {
  return (
    <div>
      {console.log(props.dish)}
      <ul>{props.dish.name}
        <li>{props.dish.description}</li>
        <li>{props.dish.price}</li>
      </ul>


    </div>
  )
}

export default Home