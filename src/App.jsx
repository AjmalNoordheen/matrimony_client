import './App.css'
import UserProfile from './Pages/UserProfile'
import { Route, Routes } from 'react-router-dom'
import DashBoardPage from './Pages/UserDashBoard'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<DashBoardPage/>}/>
      <Route path='/profile/:pic' element={<UserProfile/>}/>
    </Routes>
    </>
  )
}

export default App
