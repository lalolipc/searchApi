import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetchByUrl } from '../hooks/useFetchByUrl'
const MultipleCustomHooks = () => {
    const {counter, increment}= useCounter(1);
    const {data,loading}= useFetchByUrl(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote}= !!data &&data[0];
    const handdleClick = () =>{
        increment(counter)
    }
    return (
        <div>
            <p>BreakingBad Quotes</p>
            {loading ? (
            <div className="alert alert-info text-center">
                ...loading
            </div>
            ):
            (<div>
                <blockquote className ="blockquote aling-text-right">
                <p className="mb-1">{quote}</p>
                <footer className="blockquote-footer text-right">{author}</footer>               
                </blockquote>
            </div>
            )
}
<button  className="btn btn-primary" onClick={handdleClick}>Change Quote</button>
        </div>
    )
}

export default MultipleCustomHooks
