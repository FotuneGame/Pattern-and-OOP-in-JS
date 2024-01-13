// объект который оборачиваем в декоратор
class Coffee{
    getCost(){
        return 10;
    }
}
//Обертка декоратор
class MilkCoffee{
    constructor(coffee) {
        this.coffee=coffee;
    }
    getCost(){
        return this.coffee.getCost() + 2;
    }
}

module.exports = ()=>{
    console.log("Декоратор");
    const coffee = new Coffee();
    const milkCoffee = new MilkCoffee(coffee);
    console.log("(Декоратор) Цена кофе без декоратора: ",coffee.getCost());
    console.log("(Декоратор) Цена кофе с декоратора: ",milkCoffee.getCost());
    console.log("_______________");
}