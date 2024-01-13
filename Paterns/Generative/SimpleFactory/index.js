// вид продукции
class WoodenDoor{
    constructor(size) {
        this.size = size;
    }

    getSize(){
        return this.size;
    }
}

//конкретная фабрика
const DoorFactory = {
    makeDoor: (size) => new WoodenDoor(size)
}

module.exports = () => {
    const door=DoorFactory.makeDoor("2x2");
    console.log("Простая фабрка (дверь): ", door.getSize());
}