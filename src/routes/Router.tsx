import { CreateModelPage } from '@/pages/CreateModelPage'
import { EditModelPage } from '@/pages/EditModelPage'
import { MainPage } from '@/pages/MainPage'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path='model/create/' element={<CreateModelPage />} />
      <Route path='model/:modelId/edit/' element={<EditModelPage />} />
    </Routes>
  )
}

export default Router