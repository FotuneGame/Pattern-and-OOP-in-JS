//иерархия 1
class Color{
    constructor(type) {
        this.type=type;
    }
    get(){
        return this.type;
    }
}

class Black extends Color{
    constructor() {
        super("Черный цвет");
    }
}

//иерархия 2
class Model{
    constructor(color) {
        this.color= color;
    }
}

class WoodDoor extends Model{
    constructor(color) {
        super(color);
    }
    makeDoor(){
        return `Поставлена деревянная дверь с цветом: ${this.color.get()}`;
    }
}

class MetalDoor extends Model{
    constructor(color) {
        super(color);
    }
    makeDoor(){
        return `Поставлена железная дверь с цветом: ${this.color.get()}`;
    }
}

module.exports = ()=>{
    console.log("Мост");
    const woodDoor = new WoodDoor(new Black());
    const metalDoor = new MetalDoor(new Black());
    console.log("(Мост)",woodDoor.makeDoor());
    console.log("(Мост)",metalDoor.makeDoor());
    console.log("_______________");
}