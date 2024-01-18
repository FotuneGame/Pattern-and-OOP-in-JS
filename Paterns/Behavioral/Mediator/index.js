//Класс посредник
class Mediator{
    use(){
        return console.log("(Посредник) Медиатор сделал по струнам трынь");
    }
}

//класс использующий посредника
class Gitar{
    constructor(mediator) {
        this.mediator=mediator;
    }
    use(){
        this.mediator.use();
    }
}

module.exports = ()=>{
    console.log("Посредник");

    const gitar = new Gitar(new Mediator());
    gitar.use();

    console.log("_______________");
}