// import './assets/css/App.css'
import { Route, Routes, } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CountryPage from './pages/CountryPage'

function App() {


  return (
    <div id='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:countryCode' element={<CountryPage />} />
      </Routes>
    </div>
  )
}

export default App
