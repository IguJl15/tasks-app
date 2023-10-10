import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from './auth/views/login'
import { ErrorPage } from './common/components/ErrorPage'
import Header from './home/views/components/Header'
import IndexPage from './home/views/home'
import { TaskPage } from './tasks/views/task-details'
import { TasksPage } from './tasks/views/tasks-list'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/tasks'>
            <Route index element={<TasksPage />} />
            <Route path=':id' element={<TaskPage />} />
          </Route>
          <Route path='*' element={<ErrorPage />} />
        </Routes>

        <footer>
          <p>Fim por fim feito por mim (Giro)!</p>
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
