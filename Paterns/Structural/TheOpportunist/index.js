//типы дверей приспособленцы (только уникальные из них выживут)
class Door{

}

//как фабрика но экономит ресурсы (пк в частности память не создавая лишинии объекты)
class DoorMaker{
    constructor() {
        this.doors=[]
    }
    make(preference){
        this.doors[preference] = this.doors[preference] || new Door();
        return this.doors[preference];
    }
}

//класс использующий экономную фабрику
class DoorShop{
    constructor(shopMaker) {
        this.shopMaker=shopMaker;
        this.orders=[];
    }

    takeOrder(doorType,table){
        this.orders[table]=this.shopMaker.make(doorType)
    }

    serve(){
        this.orders.forEach((order,index)=>{
            console.log(`(Приспособленец) дверь создана и доставлена по индексу объекта:${index}`);
        })
    }
}


module.exports = ()=>{
    console.log("Приспособленец");
    const doorMaker = new DoorMaker();
    const shop = new DoorShop(doorMaker);

    shop.takeOrder('wood',1);
    shop.takeOrder('metal',2);
    shop.takeOrder('metal',1);

    shop.serve();

    console.log("_______________");
}