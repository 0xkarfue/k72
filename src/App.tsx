import { Route, Routes } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home'
import Project from './pages/Project'
import Agence from './pages/Agence'

function App() {

  return (
    // <div className='overflow-x-hidden'>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/travail' element={<Project />} />
      </Routes>
    // </div>
  )
}

export default App
