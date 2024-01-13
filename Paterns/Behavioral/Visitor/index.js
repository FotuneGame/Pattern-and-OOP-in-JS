//классы принимающие
class A{
    make(){
        console.log("(Посетитель) Посещение класса A");
    }
    accept(operation){
        operation.visitA(this);
    }
}
class B{
    give(){
        console.log("(Посетитель) Посещение класса B");
    }
    accept(operation){
        operation.visitB(this);
    }
}
class C{
    write(){
        console.log("(Посетитель) Посещение класса C");
    }
    accept(operation){
        operation.visitC(this);
    }
}


//Посетитель (добовляет доп операции не изменяя исходный код)
const Visitor={
    visitA(a){
        console.log("(Посетитель) в объекте Visitor идем далее");
        a.make();
    },
    visitB(b){
        console.log("(Посетитель) в объекте Visitor идем далее");
        b.give();
    },
    visitC(c){
        console.log("(Посетитель) в объекте Visitor идем далее");
        c.write();
    }
}

module.exports =()=>{
    console.log("Посетитель");

    const a = new A();
    const b = new B();
    const c = new C();

    a.accept(Visitor);
    b.accept(Visitor);
    c.accept(Visitor);

    console.log("_______________");
}