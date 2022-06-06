import useFetch from '../hooks/useFetch'

export default function Homepage() {
const { loading, error, data } = useFetch('http://localhost:1337/api/pages/5')
// console.log("datos",data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>


  return ( <div>
      {data.data.attributes.block[0].slide.map(item => (
        <div key={item.id} className="review-card">
   
          <h2>{item.title}</h2>
          
          <small>datos traidos</small>

        </div>
      ))}
    </div>
  )
}