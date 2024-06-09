//Declaring a class

class Product{
    //constructor is a builtin function for class
    //this is a parameterized constructor, we know there are default and parameterized constructors(sem2 ma java ma padhethyam ni)
    
    constructor(productId, itemName, price){
        this.productId=productId;
        this.itemName=itemName;
        this.price=price;
    }
}

//euta pencil nam ko object banako(instace of the class 'Product')
let pencil=new Product("P10","Pencil",20);
//printing the object, yaha vs code mai run gari output herna(terminal ma)lai console.log use gareko
console.log(pencil);

let chair=new Product("P11", "Chair",500);
console.log(chair.price);
//esari object ko euta property matra print garna ni milyo, purai object print garna ni milyo.

//Getter and Setter methods for classes
class Vehicle{
    constructor(mileage,name){
        this.mileage=mileage;
        this.name=name;
    }
    // here get and set are keywords used to define the respective getter and setter functions(methods)
    get getMileage(){
        return this.mileage;
    }

    set setMileage(valueofmileage){
        this.mileage=valueofmileage;
    }
}
 
let tata=new Vehicle(55,"TATA");
let mil=tata.getMileage();
console.log(mil);
tata.setMileage(85);
console.log(tata.mileage);

//We can extend a class as well.(child class banaune which implements the parent). Basically inheritance,
//which we studied in OOP with java. OOP is best knowledge trust me. 
//jun sukai prog language bhaye ni oop ko concept ta same nai huncha ok.

