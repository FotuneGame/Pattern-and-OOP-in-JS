//группа объект для единой обработки
class Developer{
    constructor(name,salary) {
        this.name=name;
        this.salary=salary;
    }

    getInfo(){
        return `Разработчик ${this.name} имеет зарплату в шекелях:${this.salary}`;
    }

}

class PostMan{
    constructor(name,salary) {
        this.name=name;
        this.salary=salary;
    }

    getInfo(){
        return `Почтальен ${this.name} имеет зарплату в шекелях:${this.salary}`;
    }

}

//Сам класс компанирующий работу с этими классами
class Organization{
    constructor() {
        this.employees=[];
    }

    addEmployee(employee){
        this.employees.push(employee);
    }

    getSalary(){
        this.employees.forEach( (employee) =>{
            employee.salary+=1;
        })
    }

    getInfo(){
        this.employees.forEach( (employee) =>{
            console.log("(Компановщик) ",employee.getInfo())
        })
    }
}

module.exports = ()=>{
    console.log("Компановщик");
    const organization = new Organization();
    organization.addEmployee(new Developer("1",10))
    organization.addEmployee(new Developer("2",20))
    organization.addEmployee(new PostMan("1",10))
    organization.addEmployee(new PostMan("2",20))
    organization.getInfo();
    console.log("(Компановщик) Повысили зп всем")
    organization.getSalary();
    organization.getInfo();
    console.log("_______________");
}