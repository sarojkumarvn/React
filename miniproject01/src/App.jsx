

import Login from './components/Login'
import Profile from './components/profile'
import UserContextProvider from './Context/UserContextProvider'

const App = () => {


  return (
    <UserContextProvider>
    <h1>Saroj is yoyo</h1>
    <Login/>
   <Profile/>
    </UserContextProvider>
  )
}

export default App
