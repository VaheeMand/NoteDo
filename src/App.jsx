import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Splash from './Splash.jsx'
import Menu from './menu/Menu.jsx'
import Note from './note/Note.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Splash />}/>
        <Route path='/Menu' element={<Menu />}/>
        <Route path='/Note' element={<Note />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
