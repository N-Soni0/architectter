import { MainPage } from '@/pages/MainPage'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  )
}

export default Router