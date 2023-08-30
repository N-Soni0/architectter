import { CreateModelPage } from '@/pages/CreateModelPage'
import { CreateFloorPage } from '@/pages/CreateFloorPage'
import { EditFloorPage } from '@/pages/EditFloorPage'
import { EditModelPage } from '@/pages/EditModelPage'
import { MainPage } from '@/pages/MainPage'
import { ModelPage } from '@/pages/ModelPage'
import { FloorPage } from '@/pages/FloorPage'
import { Route, Routes } from 'react-router-dom'

const Router = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path='model/create/' element={<CreateModelPage />} />
      <Route path='model/:modelId/edit/' element={<EditModelPage />} />
      <Route path='model/:modelId/' element={<ModelPage />} />

      <Route path='model/:modelId/floor/:floorId/' element={<FloorPage />} />
      <Route path='model/:modelId/floor/create' element={<CreateFloorPage />} />
      <Route path='model/:modelId/floor/:floorId/edit' element={<EditFloorPage />} />
    </Routes>
  )
}

export default Router