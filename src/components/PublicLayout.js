import { useState } from 'react'

const PublicLayout = () => {
    const [show, setShow] = useState(true)
    return (

           <div>
            <button  className="btn btn-primary" onClick={()=>setShow(!show)}>hidden/Show Hello World</button>
                {show &&
                <p>Bienvenido</p>
                }
           </div>
    )
}

export default PublicLayout
