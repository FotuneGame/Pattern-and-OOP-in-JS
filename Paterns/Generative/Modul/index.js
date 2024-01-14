/*
Паттерн «Модуль» полностью инкапсулирует данные, которые заключены в нем.
Мы можем обращаться к ним только с помощью публичных методов, и пока в JavaScript
 не появится реализации публичных и приватных методов «из коробки» придется
 реализовывать модуль таким образом.
 */

const Module = ( function (){
    let public_field = "Публичное поле";
    let private_field = "Приватное";

    return{
        public_field
    }
})();

module.exports = () =>{
    console.log("Модуль");
    console.log("(Модуль) Публичное поле: ",Module.public_field);
    console.log("(Модуль) Приватное поле: ",Module.private_field);
    console.log("_______________");
}