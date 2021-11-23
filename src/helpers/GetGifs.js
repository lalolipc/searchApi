export const getGifs = async (category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=Yz8gjKyPDXFnPneFkec6NGQSvU5FJD8C`	;
    const res= await fetch(url);
    //asignacion desestructurante
    const { data }= await res.json();
 
    const gifs=data.map( img =>{
        return{
            id: img.id,
            title:img.title,
            url: img.images?.downsized_medium.url
        }
    })
   
   return gifs;
}