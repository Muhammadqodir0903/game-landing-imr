import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Pages/Main/Main'


function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </div>
  )
}

export default App
