import './navbar.css'
import { Nav } from 'react-bootstrap'

function Navbar (){
    return (
        <nav>
            <ul className='topicos_nav'>
                <li><Nav.Link href='#home'>Home</Nav.Link></li>
                <li><Nav.Link href='#projetos'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#tecnologias'>Tecnologias</Nav.Link></li>
                <li><Nav.Link href='#sobremim'>Sobre mim</Nav.Link></li> 
            </ul>
            
            <ul className='redes_nav'>
                <a href="https://github.com/etsets2023" target='blanket'><i class="bi bi-github"></i></a> 
                <a href="https://www.linkedin.com/in/elaine-tavares-b5797b1b0/" target='blanket'><i class="bi bi-linkedin"></i></a>
                <a href="https://wa.me/5521984510746?text=Ol%C3%A1%2C+desejo+informa%C3%A7%C3%A3o+sobre+seu+tra" target='blanket'><i class="bi bi-whatsapp"></i></a>
            </ul>
        </nav>
    )
}

export default Navbar