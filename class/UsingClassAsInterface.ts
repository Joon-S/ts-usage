class Point {
    xx: number
    yy: number
}

interface Point3 extends Point {
    zz: number
}

let point3d: Point3 = {xx: 1, yy: 2, zz: 3} as Point3