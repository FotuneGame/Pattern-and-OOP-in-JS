//Базовый класс определяющий скелет алгоритмов
class Builder{
    build(){
        this.syntacticAnalysis();
        this.linker();
        this.assemble();
        this.machineCode();
        this.deploy();
    }
}

//Дочерний класс реализующий сборку
class WindowsBuilder extends Builder{
    syntacticAnalysis() {
        console.log('(Шаблонный метод) Синтаксический анализ кода');
    }

    linker() {
        console.log('(Шаблонный метод) Просмотр всех связанных с кодом файлов');
    }

    assemble() {
        console.log('(Шаблонный метод) перенос в код на ассемблере с оптимизацией');
    }

    machineCode() {
        console.log('(Шаблонный метод) перенос в машинный код');
    }

    deploy() {
        console.log('(Шаблонный метод) сборка всех собранных файлов в exe или dll');
    }
}

module.exports=()=>{
    console.log("Шаблонный метод");
    const windowsBuilder=new WindowsBuilder();
    windowsBuilder.build();
    console.log("_______________");
}
