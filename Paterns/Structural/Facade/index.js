//Сложный класс с моножеством действий
class Computer {

    getElectricShock() {
        console.log('(Фасад) Ouch!')
    }

    makeSound() {
        console.log('(Фасад) Beep beep!')
    }

    showLoadingScreen() {
        console.log('(Фасад) Loading..')
    }

    bam() {
        console.log('(Фасад) Ready to be used!')
    }

    closeEverything() {
        console.log('(Фасад) Bup bup bup buzzzz!')
    }

    sooth() {
        console.log('(Фасад) Zzzzz')
    }

    pullCurrent() {
        console.log('(Фасад) Haaah!')
    }
}
//Фасад - интерфейс для работы с этим сложным классом
class ComputerFacade
{
    constructor(computer) {
        this.computer = computer
    }

    turnOn() {
        console.log("(Фасад) Запуск компьютера (всё ниже выполняется одной функцией)");
        this.computer.getElectricShock()
        this.computer.makeSound()
        this.computer.showLoadingScreen()
        this.computer.bam()
    }

    turnOff() {
        console.log("(Фасад) Выключение компьютера (всё ниже выполняется одной функцией)");
        this.computer.closeEverything()
        this.computer.pullCurrent()
        this.computer.sooth()
    }
}

module.exports = ()=>{
    console.log("Фасад");
    const computer =new Computer();
    const computerFacade = new ComputerFacade(computer);
    computerFacade.turnOn();
    computerFacade.turnOff();
    console.log("_______________");
}