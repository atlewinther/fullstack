import { useState } from 'react'


const Hello = (vadbro) => {
  console.log(vadbro)
  return(
    <div>
      <p>Hello {vadbro.navn} you are {vadbro.alder}</p>
    </div>
  )
} 

const Footer = () => {
  return (
    <div>
      greeting app created by Atle
    </div>
  )
}

const App = () => {
  const friends = [
    { navn: 'Atle', alder: 40},
    { navn: 'signe', alder: 50},
  ]

  return (
    <div>
      <p>Hej {friends} du er ikke {friends[1].alder} år gammel</p>
      <p>{friends[1].alder}</p>
    </div>
  )
}

export default App
