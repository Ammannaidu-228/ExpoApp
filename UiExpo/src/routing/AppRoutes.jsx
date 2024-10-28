import {Route, Routes} from 'react-router-dom'
import Landing from '../pages/Landing'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import About from '../pages/About'
function AppRoutes() {
  return (
    <div>
         <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/about' element={<About/>}/>
         </Routes>   
    </div>
  )
}

export default AppRoutes
