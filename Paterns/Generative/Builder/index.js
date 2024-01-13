class Door{
    constructor(builder) {
        this.size = builder.size;
        this.name = builder.name;
        this.price = builder.price;
    }
    getInfo(){
        console.log(`(Строитель) Дверь: размер ${this.size},имя ${this.name},цена ${this.price}`);
    }
}

class DoorBuilder{
    constructor(size) {
        this.size = size;
    }
    addPrice(price){
        this.price=price;
    }
    addName(name){
        this.name=name;
    }

    build(){
        return new Door(this);
    }
}

module.exports= ()=>{
    console.log("Строитель");
    const doorBuilder = new DoorBuilder("2x2");
    doorBuilder.addName("Сасная");
    doorBuilder.addPrice(2000);

    const door = doorBuilder.build();
    door.getInfo();
    console.log("_______________");
}