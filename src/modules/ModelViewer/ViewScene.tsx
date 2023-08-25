import Floor from './objects/Floor';
import { getFloorGroundOffset } from './utils/getFloorGroundOffset';

interface ViewSceneProps {
    floors: FloorDoc[]
}

const ViewScene: React.FC<ViewSceneProps> = ({ floors }) => {
    return (
        <>
            {
                floors.map((floor, floorIndex) =>  (
                    <Floor
                        key={floor._id}
                        floor={floor}
                        groundOffset={getFloorGroundOffset(
                            floorIndex,
                            floors.map((floor) => floor.height)
                        )}
                    />
                ))
            }
        </>
    )
}

export default ViewScene