//Цель интерпертатора  - сделать считывание данных в определённом формате

// Абстратное выражение
class Expression {
    interpret(context) {}
}

// Terminal Expression (минимальный объект для которого есть единственная форма)
class NumberExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }
    interpret() {
        return this.value;
    }
}
// Non-Terminal Expression (объект для которого нет единственной формы)
class AddExpression extends Expression {
    constructor(leftExpression, rightExpression) {
        super();
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }
    interpret() {
        return this.leftExpression.interpret() + this.rightExpression.interpret();
    }
}

module.exports = () =>{
    console.log("Интерпретатор");

    // Client Code
    const five = new NumberExpression(5);
    const two = new NumberExpression(2);
    const add = new AddExpression(five, two);
    console.log("(Интерпретатор) сумма терминальных выражений дает не терминальную запись (5+2)=",add.interpret());

    console.log("_______________");
}