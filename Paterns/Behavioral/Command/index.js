//Получатель
class Client{
    getOrder(){
        console.log("(Команда) Client: Заказ получен");
    }
}


//Набор команд
class CookerCommand{
    constructor(client) {
        this.client=client;
    }

    makeOrder(){
        this.client.getOrder();
    }
}

//Класс вызывающий команду
class Waitress{
    getOrderClient(CookerCommand){
        console.log("(Команда) Waitress: Заказ принят");
        CookerCommand.makeOrder();
    }
}

module.exports = ()=>{
    console.log("Команда");

    const client = new Client();
    const waitress = new Waitress();
    const cooker = new CookerCommand(client);
    //официант получил заказ и передал его повару
    waitress.getOrderClient(cooker);


    console.log("_______________");
}