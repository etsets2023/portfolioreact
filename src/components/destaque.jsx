import './destaque.css'
import Botao from './botao.jsx'




function Destaque (){
    return(
        <div className='container_main' id='home'>
            <h1 className='h1_destaque'>Desenvolvedora Front End</h1>
            <p>Formada em Tecnologia em Gestão Financeira, me apaixonei pelo Desenvolvimento Web e busco transição de carreira para a área, possuo competência em <strong>GitHub</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> e <strong>React</strong> e estou atuando como voluntária em Desenvolvimento Front-end no Instituto Capoeira Social.</p>
            <div className='container_redes'>
                <Botao text='Currículo' link='https://drive.google.com/file/d/1E2bOurI_JM86VMMV4oZa1Y0ji2N4MsUt/view?usp=drive_link'/>
                <Botao text='GitHub' link='https://github.com/etsets2023'/>
                <Botao text='Linkedin' link='https://www.linkedin.com/in/elaine-tavares-b5797b1b0/'/>
            </div>
        </div>
    )
}

export default Destaque


                