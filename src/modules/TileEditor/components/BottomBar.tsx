import { useShapeStore } from "../store/shapeStore";
import { ITile } from "../types/editShape";

interface BottomBarProps {
  save?: (tiles: ITile[]) => void;
  minTilesNumber?: number;
}

const BottomBar: React.FC<BottomBarProps> = ({ save, minTilesNumber = 3 }) => {
  const clearTiles = useShapeStore(state => state.clearTiles);
  const tiles = useShapeStore(state => state.shape.tiles);

  const handleSave = (tiles: ITile[]) => {
    if (tiles.length < minTilesNumber) return;

    save && save(tiles);
  }

  return (
    <div className="flex gap-3 p-3 justify-end bg-base-200">
        <button onClick={clearTiles} className="btn w-[150px]" disabled={!tiles.length}>Clear</button>
        <button onClick={() => handleSave(tiles)} disabled={minTilesNumber > tiles.length} className="btn btn-primary w-[150px]">Save</button>
    </div>
  )
}

export default BottomBar