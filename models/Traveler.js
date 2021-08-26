const { carroca,viajante } = require("../app");
const Wagon = require("./Wagon")

class Traveler {
    constructor(name,isHealthy,food){
        this.name=name
        this.food=food
        this.isHealthy=isHealthy
    }
    hunt(){
        this.food+=2
    }
    eat(){
        if(this.food>0){
            this.food-=1
        }else{
            this.isHealthy=false
        }
    }
}
class Hunter extends Traveler{
    constructor(name,isHealthy,food){
        super(name,isHealthy,food)
        this.food=food
       
    }
    hunt(){
        this.food+=5
    }
    eat(){
        if(this.food>=2){
            this.food-=2
        }
        if(this.food<2){
            this.food=0
            this.isHealthy=false
        }
    }
    giveFood(traveler,numOfFoodUnits){
      traveler.food+=numOfFoodUnits
      this.food-=numOfFoodUnits
    }
}
class Doctor extends Traveler{
    constructor(name,isHealthy,food){
        super(name,isHealthy,food)
        this.food=food
    }

    heal(traveler){
        traveler.isHealthy=true
    }
}

module.exports = {Traveler,Hunter,Doctor};