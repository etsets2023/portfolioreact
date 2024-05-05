import './projetos.css'
import institutoCapoeira from '../assets/projeto_instituto_capoeira.png'
import consultoraImobiliaria from '../assets/projeto_consultora_imobiliaria.png'
import elaineFlix from '../assets/projeto_elaineflix.png'
import hulu from '../assets/projeto_hulu.png'
import Cards from './cards'

function Projetos(){
    return(
        <section id="projetos">
            <h1>Projetos</h1>

            <div className='cards_projetos'>
                <Cards
                img={institutoCapoeira}
                title="Instituto Capoeira Social"
                descricao="Projeto desenvolvido como voluntária para Organização sem fins lucrativos." 
                tech="HTML, CSS e JavaScript" 
                site="https://gerandofalcoes-three.vercel.app/"
                    />
                 <Cards
                img={consultoraImobiliaria}
                title="Consultora Imobiliária"
                descricao="Projeto desenvolvido como freelancer para profissional imobiliária autônoma." 
                tech="HTML, CSS e JavaScript" 
                site="https://cristianecorretora.vercel.app/"
                    />
                 <Cards
                img={elaineFlix}
                title="ElaineFlix"
                descricao="Projeto clone do NetFlix desenvolvido durante o curso Programador Web Completo" 
                tech="HTML, CSS, JavaScript e Bootstrap" 
                site="https://elaine-flix.vercel.app/"
                    />
                 <Cards
                img={hulu}
                title="Streaming"
                descricao="Desenvolvi um projetinho para focar no conhecimento de HTML e CSS, site modelo: hulu.com" 
                tech="HTML, CSS e JavaScript" 
                site="https://hulu-rose-nine.vercel.app/"
                    />
            </div>
        </section>

    )
}

export default Projetos