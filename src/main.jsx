import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Route from '../src/Routes/Route'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Route></Route>
  </StrictMode>,
)
