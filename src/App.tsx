import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Home from './pages/home/Home'
import StudentLogin from './pages/student-login/StudentLogin'
import AdminLogin from './pages/admin-login/AdminLogin'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/student/login' element={<StudentLogin />} />
            <Route path='/admin/login' element={<AdminLogin />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
