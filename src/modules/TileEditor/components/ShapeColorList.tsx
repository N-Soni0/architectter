import { useShapeStore } from '../store/shapeStore'

interface ShapeColorListProps {
    
}

const ShapeColorList: React.FC<ShapeColorListProps> = () => {
  const editingShape = useShapeStore(state => state.shape);
  const helperShapes = useShapeStore(state => state.helperShapes);


  return (
    <ul className='bg-base-200 flex gap-5 px-4 py-2 overflow-auto'>
        {[editingShape, ...helperShapes]
          .filter(shape => shape.color && shape.connect)
          .map((shape, index) => {
            return <li className='flex items-center gap-x-2 bg-base-300 py-1 px-2 rounded-md' key={index}>
              {/* Color */}
              <div className='min-w-[20px] min-h-[20px] rounded-full' style={{backgroundColor: shape.color}}></div>
              <p className='whitespace-nowrap'>{shape.name ?? 'Unknown shape'}</p>
            </li>
        })}
    </ul>
  )
}

export default ShapeColorList