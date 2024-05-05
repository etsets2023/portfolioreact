import { useState } from 'react'
import Navbar from './components/navbar'
import Destaque from './components/destaque'
import Projetos from './components/projetos'
import Sobremim from './components/sobremim'
import Footer from './components/footer'
import Contador from './components/contador'
import Tecnologias from './components/tecnologias'
import Cards from './components/cards'







function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Destaque/>
      <Contador/>
      <Projetos/>
      <Sobremim/>
      <Tecnologias/>
      <Footer/>
    </div>
 
  )
}

export default App
