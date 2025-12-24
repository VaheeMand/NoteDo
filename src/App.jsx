import { HashRouter, Routes, Route } from 'react-router-dom'
import Splash from './Splash.jsx'
import Menu from './menu/Menu.jsx'
import Note from './note/Note.jsx'
import Info from './note/Info.jsx'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Splash />}/>
        <Route path='/Menu' element={<Menu />}/>
        <Route path='/Note/:noteid' element={<Note />}/>
        <Route path='/Note/info/:noteid' element={<Info />}/>
      </Routes>
    </HashRouter>
  )
}

export default App
