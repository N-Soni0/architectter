import { CreateModelPage } from '@/pages/CreateModelPage'
import { MainPage } from '@/pages/MainPage'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path='model/create/' element={<CreateModelPage />} />
    </Routes>
  )
}

export default Router