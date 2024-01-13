//класс A
class Room{
    write(){
        console.log("(Адаптер) В комнате");
    }
}

//класс Adapter есть вызываемый метод класса B который вызывет метода класса A
class RoomAdapterIsDoor{
    constructor(room) {
        this.room = room;
    }

    go_in(){
        this.room.write();
    }
}

//класс B
class Human{
    enter(place){
        place.go_in();
    }
}


module.exports = ()=>{
    console.log("Адаптер");
    const room = new Room();
    const roomAdapterIsDoor = new RoomAdapterIsDoor(room);

    const human = new Human();
    human.enter(roomAdapterIsDoor);

    console.log("_______________");
}