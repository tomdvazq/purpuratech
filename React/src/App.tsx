import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { AppRouter } from './Router'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'

function App() {
  return (
      <BrowserRouter>
        <NavbarComponent/>
        <AppRouter/>
      </BrowserRouter>
  )
}

export default App
