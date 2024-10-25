class Scooter {
  static nextSerial = 1
  constructor(station){
    this.station = station
    this.user = null
    this.serial = Scooter.nextSerial++
    this.charge = 100
    this.isBroken = false
  }
  rent(user){
    if(this.charge > 20 && this.isBroken == false){
      this.user = user
    }
    else if(this.charge > 20 && this.isBroken == true){
      throw new Error("scooter needs repair")
    }
    else{
      throw new Error("scooter needs to charge")
    }
  }
  dock(station){
    this.station = station
    this.user = null
  }
  reCharge() {
    const rechargeTime = setInterval(() => {
        if (this.charge < 100) {
            this.charge += 10; 
            console.log(`Battery: ${this.charge}%`);
        } else {
            clearInterval(rechargeTime); 
            console.log("Scooter is fully charged!");
        }
    }, 1000);
  }
  repair(){
    const repair = setInterval(() => {
      if(this.isBroken == true){
        this.isBroken = false
        console.log("repair completed")
        clearInterval(repair); 
      }
    }, 5000)
  }
}


// function debug(){
//   const Scooter1 = new Scooter("blueNorth")
//   Scooter1.charge = 30
//   Scooter1.isBroken = true
//   //Scooter1.reCharge()
//   //Scooter1.dock("redWest")
//   const user1 = { username: "Isaac", password: "password123", age: 22 };
//   //Scooter1.rent(user1)
//   Scooter1.repair()

//   console.log(Scooter1)
// }

// debug()

module.exports = Scooter;
