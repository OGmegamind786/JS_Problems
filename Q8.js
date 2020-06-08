class Cuboid{
    constructor(length , width , height){
        this.l = length;
        this.w = width;
        this.h = height;
    }
    surfaceArea(){
        return 2 * ((this.l * this.w) + (this.l * this. h) + (this.w * this.h));
    }
    volume(){
        return this.l * this.w * this.h;
    }
}


class Cube extends Cuboid{
    constructor(length){
        super(length);
    }
    surfaceArea(){
       return 6 * this.l * this.l;
    }
    volume(){
        return Math.pow(this.l,3);
    }
}

console.log("---------------Q8---------------------");

let cuboidSurfaceArea = new Cuboid(10,20,30);
console.log("Cuboid Surface Area :-",cuboidSurfaceArea.surfaceArea() );
console.log("Cuboid Volume :-",cuboidSurfaceArea.volume() );

let cubearea = new Cube(10);
console.log("Cube Surface Area :-",cubearea.surfaceArea());
console.log("Cube Volume :-",cubearea.volume());
