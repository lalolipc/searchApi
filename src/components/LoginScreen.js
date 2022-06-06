import { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {
    const {setUser}=useContext(UserContext)
    return (
        <div>
            <button className="btn btn-primary" onClick={()=>setUser({name:'rocio'})}>LOGIN</button>
        </div>
    )
}

export default LoginScreen
