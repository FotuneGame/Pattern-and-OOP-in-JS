///В JavaScript нет перегрузки функций => возможен один коструктор
///класс A
class A{
    A = "A"; //PUBLIC
    #A_PRIVATE='A_PRIVATE';
    constructor() {
        this.name = "Class A";
    }
    getName(){
        return this.name;
    }
}



///Прототип (класс) C
function C(){
    this.name = "Class (prototipe) C";
}

C.prototype.getName = function (){
    return this.name;
}


//Наследование (явное множественное наследование только путем создания родительского объекта как комбинации двух родительских прототипов.)
class B extends A{
    B = "B";
    #B_PRIVATE='B_PRIVATE';
    static B_static = "B_static";
    constructor() {
        super();//вызов конструкторов классов
        this.name = "Class B";
    }

    isParentTree(Type){
        // для экземляра и типа
        return this instanceof Type;
    }

    isThisClass(Type){
        return this.constructor === Type;
    }
}




//Функция для тестов
module.exports= ()=>{
    console.log("Тест ООП в js");
    const a = new A();
    console.log(a.getName());

    const c = new C();
    console.log(c.getName());

    const b = new B();
    console.log(b.getName());
    console.log(B.B_static);
    console.log("B is child (A) (static function): ",b.isParentTree(A));
    console.log("B is (A) (default function): ",b.isThisClass(A));
    console.log("Всё........");
}
