import { useState } from 'react'
import { useCounter } from '../hooks/useCounter';
import Small from './Small';
const Memorize = () => {
    const {counter, increment}= useCounter(1);
    const [show, setShow] = useState(true);

    return (
        <div>
           
           <h1>Counter:<Small value={counter}/></h1>
            
           <hr></hr>
              <button onClick={increment} className="btn btn-primary">incrementar</button> 
              <hr></hr>
              <button onClick={()=>setShow(!show)} className="btn btn-outline-primary"> show/hide {JSON.stringify(show)}</button>
              {show &&
           <h1>Hola Mundo</h1>
            }
        </div>
    )
}

export default Memorize
