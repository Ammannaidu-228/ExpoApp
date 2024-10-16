import {Route, Routes} from 'react-router-dom'
import Landing from '../pages/Landing'
function AppRoutes() {
  return (
    <div>
         <Routes>
            <Route path='/' element={<Landing/>}/>
         </Routes>   
    </div>
  )
}

export default AppRoutes
