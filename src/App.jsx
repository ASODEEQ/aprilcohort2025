import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Layout from './pages/Layout'
import Profile from './pages/Profile'
import Effect from './pages/Effect'
import Effectpractice from './pages/Effectpractice'
// import Formm from './pages/formm'

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sp-contact" element={<Contact />} />
          <Route path="/contact" element={<Navigate to={'/sp-contact'} />} />
        </Route>
        <Route path='/effect' element={<Effect/>}/>
        {/* <Route path='/formm' element={<Formm/>}/> */}
        <Route path='/effectpractice' element={<Effectpractice/>}/>
        <Route path='/account/:username' element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

//wildcard routing
//children route or nested route

