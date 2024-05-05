import './contador.css'
import { useEffect, useState } from 'react'

function Contador (props){

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('ATIVOU EFEITO COLATERAL')
    })

    function add(){
        setCount(count + 1);
    }

    function sub(){
        setCount(count - 1);
    }
 
    return(
        <div className='contador'>
            <h1 className='h1_contador'>Contador para o UseState: {count}</h1>
            <h2>UseEffect está no console</h2>
            <div className='container_botoes'>
                <button onClick={sub} className='btn_sub'>Sub -</button>
                <button onClick={add} className='btn_add'>Add +</button>
                
            </div>
        </div>
    )
}

export default Contador