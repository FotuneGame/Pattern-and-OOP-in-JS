const Singleton = (function (){
    const info ="один на свете";

    const privateInfo = "засекреченная инфа";

    const getInfo = () => info;

    return {getInfo}

}())


module.exports = ()=>{
    console.log("Синглтон/Одиночка [реализован как патерн Модуль const Module = (function (){тело}()) ]");
    console.log("(Синглтон/Одиночка) инфа: ",Singleton.getInfo());
    console.log("(Синглтон/Одиночка) секретная инфа:",Singleton.privateInfo);
    console.log("_______________");
}