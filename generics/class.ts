/**
 * This class is going to accept items and give when asked for
 * 
 * @class GenericCollection
 */
export class GenericCollection<T>{
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

}

let numCollection: GenericCollection<number> = new GenericCollection<number>(1, 2, 3);
let stringCollection: GenericCollection<string> = new GenericCollection<string>("Hello", "SDRCians");

let output = stringCollection.getCollection()

// console.log(output)




