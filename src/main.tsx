import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Stair from './components/common/Stair.tsx'
import NavContext from './context/NavContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Stair>

        <NavContext>
          <App />
        </NavContext>
      </Stair>

    </BrowserRouter>
  </StrictMode>,
)