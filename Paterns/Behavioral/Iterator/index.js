// итерируемый класс
class RadioStation{
    constructor(value) {
        this.value=value;
    }

    getValue(){
        return this.value;
    }
}


//итератор
class StationList{
    constructor() {
        this.stations=[];
    }
    addStation(station){
        this.stations.push(station);
    }
    removeStation(station){
        const value = station.getValue();
        this.stations = this.stations.filter((station) =>{
            return station.getValue() !==value;
        })
    }
}


module.exports = ()=>{
    console.log("Итератор");

    const stationList = new StationList();

    stationList.addStation(new RadioStation(89));
    stationList.addStation(new RadioStation(101));
    stationList.addStation(new RadioStation(99));

    stationList.stations.forEach((station)=> console.log("(Итератор) Станция на волне: ",station.getValue()));

    stationList.removeStation(new RadioStation(89));
    console.log("(Итератор) Станция на волне 89 удалена");
    stationList.stations.forEach((station)=> console.log("(Итератор) Станция на волне: ",station.getValue()));


    console.log("_______________");
}