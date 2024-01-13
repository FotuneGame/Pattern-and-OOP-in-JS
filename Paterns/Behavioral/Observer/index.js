//Класс подписывающийся на рассылку
class Subscriber{
    constructor(name) {
        this.name=name;
    }

    give(){
        console.log(`(Наблюдатель) класс Subscriber c именем ${this.name} получил рассылку`);
    }
}

//Класс рассылки
class InformationBoard{
    constructor() {
        this._subscribers=[];
    }

    subscribe(subscriber){
        this._subscribers.push(subscriber);
    }

    sendInformation(){
        this._subscribers.forEach((subscriber)=>{
            subscriber.give();
        })
    }
}

module.exports =()=>{
    console.log("Наблюдатель");

    const board = new InformationBoard();
    board.subscribe(new Subscriber("Валера"));
    board.subscribe(new Subscriber("Костя"));
    board.subscribe(new Subscriber("Жак"));

    board.sendInformation();

    console.log("_______________");
}