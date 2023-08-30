import { FC } from 'react';
import StraightWall from './StraightWall';
import { ShapePointConnectionKind } from '@/types/shape';

export interface WallProps {
  start: ShapePoint;
  end: ShapePoint;
  height: number;
}

const Wall: FC<WallProps> = ({ start, end, height }) => {
  return (
    <>
      {start.connection === ShapePointConnectionKind.STRAIGHT && (
        <StraightWall
          start={start}
          end={end}
          height={height}
        />
      )}
    </>
  );
};

export default Wall;
