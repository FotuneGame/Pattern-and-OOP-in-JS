// варианты реализации
const variantA = (data)=>{
    console.log("(Стратегия) Выбрана стратегия A для ",data);
    return data;
}

const variantB = (data)=>{
    console.log("(Стратегия) Выбрана стратегия B для ",data);
    return data;
}

//Функция выбора реализации в зависимости от условий НО НЕ ЕЁ ВЫЗОВ
const strategy = (data)=>{
    console.log("(Стратегия) В функции выбора стратегии (если data.length>5 => A иначе B)");
    if(data.length>5){
        return variantA;
    }else{
        return variantB;
    }
}

module.exports =()=>{
    console.log("Стратегия");

    const a=[1,2,3];
    const b=[1,2,3,4,5,6];

    const choise1 = strategy(a);
    choise1(a);

    const choise2 = strategy(b);
    choise2(b);

    console.log("_______________");
}