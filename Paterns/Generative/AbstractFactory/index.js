//тип продукции
class WoodDoor{
    get(){
        console.log("(Абстрактная фабрика) Деревяннная дверь");
    }
}

class MetalDoor{
    get(){
        console.log("(Абстрактная фабрика) Железная дверь");
    }
}

//специалисты по установке двери
class Ivan{
    getInfo(){
        console.log("(Абстрактная фабрика) Специалист Иван по деревянным дверям");
    }
}

class Sasha{
    getInfo(){
        console.log("(Абстрактная фабрика) Специалист Саша по железным дверям");
    }
}

//частные фабрики
/*
DoorFactory interface :
    makeDoor()
    makeExpert()
 */
class WoodenDoorFactory{
    makeDoor(){
        return new WoodDoor()
    }
    makeExpert(){
        return new Ivan()
    }
}

class MetalDoorFactory{
    makeDoor(){
        return new MetalDoor()
    }
    makeExpert(){
        return new Sasha()
    }
}

module.exports = ()=>{
    console.log("Абстрактная фабрика");
    const woodFactory = new WoodenDoorFactory();
    const woodDoor = woodFactory.makeDoor();
    const woodExpert = woodFactory.makeExpert();
    woodDoor.get();
    woodExpert.getInfo();

    const metalFactory = new MetalDoorFactory();
    const metalDoor = metalFactory.makeDoor();
    const metalExpert = metalFactory.makeExpert();
    metalDoor.get();
    metalExpert.getInfo();
    console.log("_______________");
}