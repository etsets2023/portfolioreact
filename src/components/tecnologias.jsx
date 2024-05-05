import './tecnologias.css'
import html from '../assets/tecnologia_html.png'
import css from '../assets/tecnologia_css.png'
import javascript from '../assets/tecnologia_js.webp'
import react from '../assets/tecnologia_react.png'



function Tecnologias(){
    return(
        <div className='tecnologias' id='tecnologias'>
            <h1>Tecnologias</h1>
            <div className='tecnologia'>
                <img src={html} alt="" />
                <p>HTML</p>
            </div>
            <div className='tecnologia'>
                <img className='css' src={css} alt="" />
                <p>CSS</p>
            </div>
            <div className='tecnologia'>
                <img src={javascript} alt="" />
                <p>JavaScript</p>
            </div>
            <div className='tecnologia'>
                <img src={react} alt="" />
                <p>React</p>
            </div>
            <div className='tecnologia'>
                <i class="bi bi-github git"></i>
                <p>Github</p>
            </div>
        </div>
    )
}

export default Tecnologias