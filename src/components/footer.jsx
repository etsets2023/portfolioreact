import './footer.css'

function Footer (){
    return (
        <footer>
            <div className='telefone_footer'>
                <p>Meu contato:</p>
                <p>(21) 98451 0746</p>
            </div>
            <div className='email_footer'>
                <p>E-mail:</p>
                <a href="mailto:elainetavares.developer@gmail.com">elainetavares.developer@gmail.com</a>
            </div>
            <div className='redes_nav'>
              <a href="https://github.com/etsets2023" target='blanket'><i class="bi bi-github"></i></a> 
              <a href="https://www.linkedin.com/in/elaine-tavares-b5797b1b0/" target='blanket'><i class="bi bi-linkedin"></i></a>
              <a href="https://wa.me/5521984510746?text=Ol%C3%A1%2C+desejo+informa%C3%A7%C3%A3o+sobre+seu+tra" target='blanket'><i class="bi bi-whatsapp"></i></a>  
            </div>
            <p className='elaine'>Elaine Tavares  © 2024</p>
        </footer>
             
    )
}

export default Footer