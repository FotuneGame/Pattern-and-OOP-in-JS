const testOOP = require("./OOP/index");
console.log(testOOP());

console.log("Часть паттернов из https://proglib.io/p/js-design-patterns, другая написаная по аналогии (другие примеры)");

console.log("Порждающие паттерны (создают оптимально объекты)");
console.log(require("./Paterns/Generative/SimpleFactory/index")());
console.log(require("./Paterns/Generative/FactoryMethod/index")());
console.log(require("./Paterns/Generative/AbstractFactory/index")());
console.log(require("./Paterns/Generative/Builder/index")());
console.log(require("./Paterns/Generative/Singleton/index")());

console.log("Структурные паттерны (структура объектов и связи между ними)");
console.log(require("./Paterns/Structural/Adapter/index")());
console.log(require("./Paterns/Structural/Bridge/index")());
console.log(require("./Paterns/Structural/Compare/index")());
console.log(require("./Paterns/Structural/Decorator/index")());
console.log(require("./Paterns/Structural/Facade/index")());
console.log(require("./Paterns/Structural/TheOpportunist/index")());
console.log(require("./Paterns/Structural/Proxy/index")());

console.log("Поведенческие паттерны (обеспечивают взаимодействие объектов и распределяют обязанности)");
console.log(require("./Paterns/Behavioral/ChainOfResponsibilities/index")());
console.log(require("./Paterns/Behavioral/Command/index")());
console.log(require("./Paterns/Behavioral/Iterator/index")());
console.log(require("./Paterns/Behavioral/Mediator/index")());
console.log(require("./Paterns/Behavioral/Memento/index")());
console.log(require("./Paterns/Behavioral/Observer/index")());
console.log(require("./Paterns/Behavioral/Visitor/index")());
console.log(require("./Paterns/Behavioral/Strategy/index")());
console.log(require("./Paterns/Behavioral/State/index")());
console.log(require("./Paterns/Behavioral/TemplateMethod/index")());