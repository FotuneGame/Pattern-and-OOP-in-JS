//Класс хранителя
class Memento{
    constructor(content) {
        this._content=content;
    }
    getContent() {
        return this._content;
    }
}

//класс где необходимо сохранять инфу и востанавливать
class TextEditor{
    constructor() {
        this.text="";
    }

    addWord(word){
        this.text+=" "+word;
    }

    getText(){
        return this.text;
    }

    save(){
        return new Memento(this.text);
    }

    restore(memento){
        this.text=memento.getContent();
    }
}


module.exports =()=>{
    console.log("Хранитель");

    const editor = new TextEditor();
    editor.addWord("Привет");
    console.log("(Хранитель) ",editor.getText());
    const memento = editor.save();
    console.log("(Хранитель) Сохранили");
    editor.addWord("мир!");
    console.log("(Хранитель) ",editor.getText());

    console.log("(Хранитель) Откат до сохранения");
    editor.restore(memento);
    console.log("(Хранитель) ",editor.getText());

    console.log("_______________");
}