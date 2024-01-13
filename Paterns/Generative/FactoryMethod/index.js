// виды продукции
class WoodDoor{
    get(){
        console.log("(Фабричный метод) Деревяннная дверь");
    }
}

class MetalDoor{
    get(){
        console.log("(Фабричный метод) Железная дверь");
    }
}

//абстракция фабрики
class Factory{
    makeDoor(){
        const skill = this.setDoor();
        if(skill)
            skill.get();
    }
}


//конкретные фабрики
class WoodFactory extends Factory{
    setDoor(){
        return new WoodDoor();
    }
}

class MetalFactory extends Factory{
    setDoor(){
        return new MetalDoor();
    }
}

//тест
module.exports= ()=>{
    console.log("Фабричный метод");
    const woodFactory = new WoodFactory();
    woodFactory.makeDoor();
    const metalFactory = new MetalFactory();
    metalFactory.makeDoor();
    console.log("_______________");
}