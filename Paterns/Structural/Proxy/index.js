//класс к которому хотим получить управление
class Door{
    open(){
        console.log("(Прокси) Дверь отрыта");
    }
    close(){
        console.log("(Прокси) Дверь закрыта");
    }
}

// прокси (заместитель) - заглушка между обращением и классов к которому обращаяются

class Security{
    constructor(door) {
        this.door=door;
    }
    open(password){
        if (this.authenticate(password)) {
            this.door.open()
        } else {
            console.log('(Прокси) не верный пароль, доступ к классу door закрыт классом Security');
        }
    }

    authenticate(password) {
        return password === 'lol'
    }

    close() {
        this.door.close()
    }
}


module.exports = ()=>{
    console.log("Прокси (Заместитель)");

    const door = new Door();
    const security = new Security(door);

    security.open("123");
    security.open("lol");
    security.close();

    console.log("_______________");
}