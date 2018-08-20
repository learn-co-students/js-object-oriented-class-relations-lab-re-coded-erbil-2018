let store = {
  drivers:[],
  passengers:[],
  trips:[]
}

let driverId = 0;
class Driver{
  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }
  trips(){
    return store.trips;
  }
  passengers(){
    return store.passengers;
  }
}

let passengerId = 0;
class Passenger{
  constructor(name){
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  
   trips(){
    return store.trips;
  }
  drivers(){
  return store.drivers;
}
}

let tripId = 0;
class Trip{
  constructor(name){
    this.name = name;
    this.id = ++tripId;
    this.driverId = driverId;
    this.passengerId = passengerId;
    store.trips.push(this);
  }
  
passenger(){
  return store.passengers[0];
}

driver(){
  return store.drivers[0];
}
}



