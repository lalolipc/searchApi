import { useEffect, useRef, useState } from 'react'

export const useFetchByUrl = (url) => {
    const isMounted = useRef(true);//estoy manteniendo la referencia al valor
    const [state, setstate] = useState({data:null, loading: true, error: null});
    
    useEffect (() =>{
        return () =>{
            isMounted.current=false;
            //no va a disparara nuevamente la renderizacion,
            // sino q mantiene la referencia al mismo
        }
    },[])
    useEffect (()=>{
        setstate({data: null, loading: true, error: null})
        fetch(url)
        .then(res => res.json())
        .then( data =>{

     if(isMounted.current){
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                }

            // setTimeout(()=>{
            //llamar de manera segura el setState
            // setstate({
            //     loading: false,
            //     error: null,
            //     data
            // })
                // if(isMounted.current){
                //     setstate({
                //         loading: false,
                //         error: null,
                //         data
                //     })
                // }else{
                //     console.log("setState no se llamo")
                // }
            // },4000)
          
        })
    },[url])
   
return state;
}

