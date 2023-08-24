import React, { useEffect } from 'react';
import TopBar from './components/TopBar';
import EditCanvas from './components/EditCanvas';
import MouseCoordinates from './components/MouseCoordinates';
import { IEditShape } from './types/editShape';
import { useShapeStore } from './store/shapeStore';
import { twMerge } from 'tailwind-merge';
import { useToolsStore } from './store/toolsStore';
import { ITile } from '@/types/tile';

interface FloorTileEditorProps {
  onChange?: (tiles: ITile[]) => void;
  initialState?: Partial<IEditShape>;
  helperShapes?: IEditShape[];
  className?: string;
  disabled?: boolean;
}

const FloorTileEditor: React.FC<FloorTileEditorProps> = ({ helperShapes, initialState, onChange, className, disabled }) => {
  const initShape = useShapeStore(state => state.init) 
  const tiles = useShapeStore(state => state.shape.tiles) 
  const disableTools = useToolsStore(state => state.disable);
  const resetTools = useToolsStore(state => state.reset);

  useEffect(() => {
    if (disabled) {
      disableTools();
    }
  }, [disabled])

  useEffect(() => {
    onChange && onChange(tiles)
  }, [tiles])

  useEffect(() => {
    initShape(
      {
        tiles: initialState?.tiles ?? tiles,
        color: initialState?.color ?? '#661ae6',
        connect: initialState?.connect ?? true,
        name: initialState?.name ?? 'Editing shape'
      }, 
      helperShapes
    )

    return () => {
      resetTools();
    }
  }, [])

	return <div className={twMerge(`flex flex-col h-full`, className)}>
    <TopBar />

    <div className='bg-base-300 flex-1 relative' id='edit-canvas'>
      <MouseCoordinates />
      <EditCanvas helperShapes={helperShapes} />
    </div>
  </div>;
};

export default FloorTileEditor;
