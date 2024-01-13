//класс для связи классов (базовый)
class Account{
    setNext(account){
        this.successor = account;
    }
    pay(priceToPay){
        if(this.canPay(priceToPay)){
            console.log(`(Цепочка обязанностей) Оплачено ${priceToPay} используя ${this.name}`);
        }else if (this.successor){
            console.log(`(Цепочка обязанностей) Не Оплачено ${priceToPay} используя ${this.name}, но может быть через...`);
            this.successor.pay(priceToPay);
        }else{
            console.log(`(Цепочка обязанностей) Не Оплачено ${priceToPay} используя ${this.name}`);
        }
    }
    canPay(price){
        return this.balance >=price;
    }
}

// производные классы
class Bank extends Account{
    constructor(balance) {
        super();
        this.name="Банк";
        this.balance=balance;
    }
}

class Cash extends Account{
    constructor(balance) {
        super();
        this.name="Наличка";
        this.balance=balance;
    }
}


module.exports=()=>{
    console.log("Цепочка обязанностей");
    const bank = new Bank(100);
    const cash = new Cash(120);
    bank.setNext(cash);
    bank.pay(119);
    console.log("_______________");
}