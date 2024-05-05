import './botao.css'

function Botao ({text, link}){
    return(
        <a href={link} className="botao">{text}</a>
    )
}

export default Botao