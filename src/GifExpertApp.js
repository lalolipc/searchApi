import { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {
    const [categories, setCategories] = useState(['One punch']);
    return (
        <div>
            <h2>Search Gif:</h2>
            <AddCategory setCategories={setCategories}/>
         
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
