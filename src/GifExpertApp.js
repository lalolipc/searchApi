import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
    const [categories, setcategories] = useState(['One punch']);
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}/>
         
                    {
                         categories.map(category =>(
                            <GifGrid  key={category} 
                            category={category}
                            />
                         ))
                    }
           
        </div>
    )
}

export default GifExpertApp
