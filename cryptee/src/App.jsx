
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import CoinDetails from './pages/CoinDetails'
import Navbar from './components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"

function App() {



  return (
    <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin-details/:id" element={<CoinDetails/>} />
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
