import { ITile } from '@/types/tile';
import { HtmlProps } from '@react-three/drei/web/Html';
import { ReactElement } from 'react';
import { DoubleSide } from 'three';

interface EditGridTileProps {
    tile: ITile;
    onClick?: (tile: ITile) => void;
    children?: ReactElement<HtmlProps & React.RefAttributes<HTMLDivElement>>
}

const EditGridTile: React.FC<EditGridTileProps> = ({ tile, children, onClick }) => {
  return (
    <mesh onClick={() => onClick && onClick(tile)} position={[tile.coordinates.x - .5, tile.coordinates.y - .5, 0]}>
        <planeGeometry />
        <meshBasicMaterial color={'#999'} side={DoubleSide} />

        {children}
    </mesh>
  )
}

export default EditGridTile