import React , {useState , useEffect}  from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login , logout } from './Store/authSlice'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    
    .then((userData) => {
      console.log('userData:', userData)
      if (userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
        console.log("afasef")
      }
    })
    .finally(() => setloading(false))
  } , [])

  return !loading ? (
    <div className='bg-gray-400 min-h-screen flex flex-wrap content-between' >
      <div className='w-full block'>
        <Header />
        <main>
          TODO :{/* <Outlet /> */ }
        </main>
        
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
