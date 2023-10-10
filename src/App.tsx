import './App.css'

import { BrowserRouter } from 'react-router-dom'
import Header from './home/views/components/Header'
import AppRoutes from './common/routes/routes-hook'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <AppRoutes />

        <footer>
          <p>Fim por fim feito por mim (Giro)!</p>
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
