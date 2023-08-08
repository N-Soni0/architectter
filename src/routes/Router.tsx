import { AuthPage } from '@/pages/AuthPage'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
        <Route path='/auth' element={<AuthPage />} />
    </Routes>
  )
}

export default Router