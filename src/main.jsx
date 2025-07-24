import { App } from './App'
import { createRoot } from 'react-dom/client'
import './style.css'
import { CountriesProvider } from './context/CountriesContext'

const root = document.getElementById('root')

createRoot(root).render(
  <CountriesProvider>
    <App />
  </CountriesProvider>,
)
