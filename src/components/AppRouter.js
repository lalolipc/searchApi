import GifExpertApp from '../GifExpertApp';
import HomeScreen from './HomeScreen';
import MultipleCustomHooks from './MultipleCustomHooks';
import NavBar from './NavBar';
import { BrowserRouter  as Router, Routes,Route  } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
  
const AppRouter = () => {
    return (
      <Router>
          <NavBar/>
              <Routes>
                <Route exact  path="/" element={<HomeScreen/>} ></Route>               
                  <Route path='/Phrases' element={<MultipleCustomHooks/>} />
                  <Route path='/login' element={<LoginScreen/>} />         
                  <Route path='/register' element={<RegisterScreen/>} />   
                  <Route path='/gifs' element={<GifExpertApp/>} />                 
              </Routes>           
        </Router>  
    )
}

export default AppRouter
