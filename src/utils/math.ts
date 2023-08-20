
export const getArithmeticMean = (...numbers: number[]): number => {
    const sum = numbers.reduce((prevSum, number) => prevSum + number, 0)

    return sum / numbers.length
}

export const getCenter2D = (start: Coordinates<2>, end: Coordinates<2>): Coordinates<2> => {
    return {
        x: (start.x + end.x) / 2,
        y: (start.y + end.y) / 2
    }
}

export function getDistance2D(
    points: [Coordinates<2>, Coordinates<2>]
): number {
    const dx = points[1].x - points[0].x;
    const dy = points[1].y - points[0].y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    return distance;
}