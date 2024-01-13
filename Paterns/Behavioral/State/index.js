//Состояния объекта (функции изменяющие состояния)
const upperCase = (inputString) => inputString.toUpperCase();
const lowerCase = (inputString) => inputString.toLowerCase();

//
class TextEditor{
    constructor(transform) {
        this._transform = transform;
    }

    setTransform(transform){
        this._transform = transform;
    }

    write(words){
        console.log(`(Состояние) Текст в текущем состоянии: ${this._transform(words)}`)
    }
}

module.exports=()=>{
    console.log("Состояние");

    const editor = new TextEditor(lowerCase);
    editor.write("малый текст");
    editor.setTransform(upperCase);
    editor.write("малый текст но уже аппер кейсом");

    console.log("_______________");
}