import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import Search from './pages/Search/Search'
import Pokemon from './pages/Pokemon/Pokemon'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Search />} path="/" />
        <Route element={<Pokemon />} path="/:id" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
