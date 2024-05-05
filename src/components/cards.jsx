import './cards.css'
import Botao from './botao.jsx'


function Cards({img, title, descricao, tech, site}){
    return(
        <div className="card">
            <a href={site}>
                <img src={img} alt="capoeira" />
            </a>
            <div className='card_texto'>
                <h2>{title}</h2>
                <p>{descricao}</p>
                <p>{tech}</p>
                <Botao text='Veja o projeto' link={site}/> 
            </div>
        </div>
    )
}

export default Cards