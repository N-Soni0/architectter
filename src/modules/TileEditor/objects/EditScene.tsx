import React from 'react'
import { useShapeStore } from '../store/shapeStore'
import Shape from './Shape';
import Grid from './Grid';
import { useToolsStore } from '../store/toolsStore';
import { Tool } from '../types/tools';
import { useMousePositionStore } from '../store/mousePositionStore';
import HelperShape from './HelperShape';

interface EditSceneProps {
  children?: React.ReactNode
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
      <Grid 
        size={100} 
        onClick={(coordinates) => {
          if (selectedTool === Tool.ADD) {
            addTile({ coordinates })}
          }
        } 
        onPointerMove={(coordinates) => setMousePosition(coordinates)} 
      />

      <Shape 
        shape={editingShape}
        onTileClick={(tile) => {
          if (selectedTool === Tool.REMOVE) {
            removeTile(tile)
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