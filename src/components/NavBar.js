import { useContext } from 'react'
import {
    NavLink
  } from 'react-router-dom';
import { UserContext } from './UserContext';
const NavBar = () => {
    const {user,setUser}= useContext(UserContext)
    return (
      
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-mb"> 
 <NavLink className=" navbar-brand" to="/">Home</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <NavLink className=" nav-item nav-link " to="/Phrases">Phrases</NavLink>  
    <NavLink className=" nav-item nav-link " to="/gifs">gifs</NavLink>  
    <NavLink  className=" nav-item nav-link " to="/register">Register</NavLink>  
    </div>

{user.name ?
<>
 <button onClick={()=>setUser({})}  className=" btn btn-outline-success  " to="/login">logout</button>  
    <span className="ml-10 text-white">usuario : {user.name}</span>
    </>
:    <NavLink className=" nav-item nav-link " to="/login">login</NavLink>  

}

  </div>
</nav>
 
    )
}

export default NavBar
