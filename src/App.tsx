import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import Search from './pages/Search/Search'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Search />} path="/" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
