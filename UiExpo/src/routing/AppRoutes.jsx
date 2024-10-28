import {Route, Routes} from 'react-router-dom'
import Landing from '../pages/Landing'
import Signin from '../pages/Signin'
function AppRoutes() {
  return (
    <div>
         <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/signin' element={<Signin/>}/>

         </Routes>   
    </div>
  )
}

export default AppRoutes
