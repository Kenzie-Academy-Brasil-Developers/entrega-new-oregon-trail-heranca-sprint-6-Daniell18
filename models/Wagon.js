const { carroca, viajante } = require("../app")

class Wagon {
    constructor(capacity){
        this.capacity=capacity
        this.passengers=[]
    }
    getAvailableSeatCount(){
        return this.capacity
    }
    join(name){
        if(this.capacity>0){
            this.passengers.push(name)
            this.capacity--
        }
    }
    shouldQuarantine() {
     
       for(let i=0;i<this.passengers.length;i++){
           if(this.passengers[i].isHealthy==="false"){
                return true
           }
       }
       return false
     }

    totalFood(){
        let count=0
        for(let i=0;i<this.passengers.length;i++){
            count+=Number(this.passengers[i].food)
        }
        return count
    }

}


module.exports = Wagon;