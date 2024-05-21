
import './App.css'
import Header from './Header/Header'
import Home from './Home/Home'
const dishes = [
  {
    id:1,
    name:'plato 1',
    description:'Este es el plato 1',
    price:10
  },
  {
    id:2,
    name:'plato 2',
    description:'Este es el plato 2',
    price:20
  },
  {
    id:3,
    name:'plato 3',
    description:'Este es el plato 3',
    price:15
  }
]
const dish = dishes.map((dish)=><Home dish={dish}/>)

function App() {

  return (
      <div>
      <Header/>    
      <h3>Platos</h3>
      {dish}
      </div>
      )
}

export default App
