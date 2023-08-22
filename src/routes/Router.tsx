import { CreateModelPage } from '@/pages/CreateModelPage'
import { EditModelPage } from '@/pages/EditModelPage'
import { MainPage } from '@/pages/MainPage'
import { ModelPage } from '@/pages/ModelPage'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path='model/create/' element={<CreateModelPage />} />
      <Route path='model/:modelId/edit/' element={<EditModelPage />} />
      <Route path='model/:modelId/' element={<ModelPage />} />
    </Routes>
  )
}

export default Router