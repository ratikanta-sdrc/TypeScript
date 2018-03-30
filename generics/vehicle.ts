/**
 * This class is going to accept items and give when asked for
 * 
 * @class GenericCollection
 */
export class GenericCollection1<T extends Vehicle>{
    private collection: T[] = []


    /**
     * Creates an instance of GenericCollection. Take items and push it in the collection array
     * @param {...T[]} item Take the items
     * @memberof GenericCollection
     */
    constructor(...item: T[]){

        item.forEach(element=>this.collection.push(element))
    }

    /**
     * 
     * This methos is going to give all the collection this class has
     * @returns Total collections
     * @memberof GenericCollection
     */

    getCollection(){
        return this.collection;
    }

    /**
     * 
     * This method is going to find all vehicle of given brand
     * 
     * @param {string} brand 
     * @returns All vehicle of given brand
     * @memberof GenericCollection1
     */
    findVehicle(brand: string){        
        return this.collection.filter(element=>element.brand === brand)        
    }

}

interface Vehicle{
    name: string,
    brand: string
}

let vehicleCollection: GenericCollection1 <Vehicle> = new GenericCollection1<Vehicle>({name: 'Activa', brand: 'Honda'},
 {name: 'Apache', brand: 'TVS'},
 {name: 'Shine', brand: 'Honda'})

 let vehicles = vehicleCollection.getCollection()

//  vehicles.length
// vehicles[0].name

//  console.log(vehicles)
console.log(vehicleCollection.findVehicle('Honda'))






