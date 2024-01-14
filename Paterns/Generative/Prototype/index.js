/*
 Здесь мы используем некоторый тип «скелета» настоящего объекта для создания нового объекта.
 А прототипирование это самый нативный тип выстраивания ООП в JavaScript.
 */

const skelet ={
    color: "red",
    create(){
        console.log("(Прототип) Объект создан!");
        //создаем наш obj
    },
    delete(){
        console.log("(Прототип) Объект удалён!");
        // удаляем наш obj
    },
}

module.exports = ()=>{
    console.log("Прототип");

    const obj = Object.create(skelet,{name:{value:'Pasha'}});
    console.log("(Прототип) Новый объект это сибиоз скелета и другого класса: ",obj.__proto__ === skelet);  //true

    console.log("_______________");
}