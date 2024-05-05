import './sobremim.css'

function Sobremim(){
    return(
        <section className="sobre_mim" id='sobremim'>
            <h1>Sobre mim</h1>
            <div className='linha'>
                <div className="bolinha1"></div>
                <div className="bolinha2"></div>
                <div className="bolinha3"></div>
                <div className="bolinha4"></div>
            </div>
            
            <div className="container_sobre_mim">
                <div className='card_sobre_mim'>
                    <p>2021</p>
                    <p className='paragrafo'>Eu estudava Tecnologia em Gestão Financeira e estava estagiando em minha área de estudo na empresa Stylus da área de eventos, onde eu atuava no atendimento ao público, fato o qual me proporcionou desenvoltura nas relações interpessoais.</p>
                </div>
                <div className='card_sobre_mim'>
                    <p>2022</p>
                    <p className='paragrafo'>Após formada segui carreira na área financeira, entrando na empresa Grupo Salta Educação como assistente de contas a pagar, a empresa é maravilhosa e atualmente permaneço trabalhando nesta. Utilizo os sistemas Totvs e Fluig garantindo o pagamento correto das contas devidas.  </p>
                </div>
                <div className='card_sobre_mim'>
                    <p>2023</p>
                    <p className='paragrafo'>Nesse ano eu conheci a área do Front End e simplesmente me apaixonei, passei a consumir muito conteúdo de tecnologia e me matriculei em cursos online, obtive muito conhecimento e quanto mais eu aprendia mais eu estudava, e passei a desenvolver alguns projetos de estudo.</p>
                </div>
                <div className='card_sobre_mim'>
                    <p>2024</p>
                    <p className='paragrafo'>Consegui meu primeiro trabalho como freelance Front End para uma consultora imobiliária autônoma e tive a felicidade de ingressar como voluntária na área de Front End no projeto Instituto Capoeira Social. Sigo com meus estudos de Tecnologia pela Alura e também pela Escola Dnc.</p>
                </div>
            </div>
        </section>
    )
}

export default Sobremim