import React from 'react'
import { useShapeStore } from '../store/shapeStore'
import Shape from './Shape';
import EditGrid from './EditGrid';
import { useToolsStore } from '../store/toolsStore';
import { Tool } from '../types/tools';
import { useMousePositionStore } from '../store/mousePositionStore';
import HelperShape from './HelperShape';
import { generateUUID } from 'three/src/math/MathUtils.js';

interface EditSceneProps {
}

const EditScene: React.FC<EditSceneProps> = () => {
  const selectedTool = useToolsStore(state => state.tool)
  const editingShape = useShapeStore(state => state.shape);
  const helperShapes = useShapeStore(state => state.helperShapes);
  const addTile = useShapeStore(state => state.addTile);
  const removeTile = useShapeStore(state => state.removeTile);
  const setMousePosition = useMousePositionStore(state => state.setPosition)

  return (
    <>
      <EditGrid 
        size={100} 
        onClick={(coordinates) => {
          if (selectedTool === Tool.ADD) {
            addTile({ id: generateUUID(), coordinates })}
          }
        } 
        onPointerMove={(coordinates) => setMousePosition(coordinates)} 
      />

      <Shape 
        shape={editingShape}
        onTileClick={(tile) => {
          if (selectedTool === Tool.REMOVE) {
            removeTile(tile.id)
          }
        }}
      />

      {helperShapes?.map((shape, index) => {
        return <HelperShape key={index} shape={shape} />
      })}
    </>
  )
}

export default EditScene