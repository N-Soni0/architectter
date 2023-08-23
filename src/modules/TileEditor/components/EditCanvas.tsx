import { Canvas } from "@react-three/fiber"
import EditScene from "../objects/EditScene"
import { IEditShape } from "../types/editShape";
import Controls from "../Controls";

interface EditCanvasProps {
    disabled?: boolean;
    helperShapes?: IEditShape[];
}

const EditCanvas: React.FC<EditCanvasProps> = ({ disabled }) => {
  return (
    <Canvas>
        <EditScene />

        {/* <OrthographicCamera 
        /> */}

        <Controls 
          enablePointerControls={false}
        />
    </Canvas>
  )
}

export default EditCanvas