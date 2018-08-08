let store = {drivers: [], passengers: [], trips: []}
 let passengerId = 0
class Driver {
  constructor(name){
    this.id = ++passengerId
    this.name = name
 
    store.drivers.push(this)
  }
}
 
let passengerId = 0
 
class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
    if(user){
      this.userId = user.id
    }
    store.items.passengers(this)
  }
  setUser(user){
    this.userId = user.id
  }
}




class Driver{
constructor()


new Driver(id,name){}

trips(){}
passengers(){}

}

class Passenger{
  
  new Passenger(id,name)
  trips(){}
  drivers(){}
  
}


class Trip{
  
  new Trip(id, driverId, passengerId){}
  driver(){}
  passenger(){}
  
}

let driver = new Driver("Alfie");