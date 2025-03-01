// class person{
//     property(){
//         console.log("person is eating food")
//     }
// }
// class employee extends person{
//     job(){
//         super.property()
//         console.log("he is web developer")
//     }
// }
// class student extends person{
//     work(){
//         super.property()
//         console.log("he is a student")
//     }
// }
// obj1 = new person();
// obj1.property();
// obj2 = new employee();
// obj2.job();
// obj3 = new student();
// obj3.work();

class shape{
    constructor(name){
        this.name=name
    }
    getarea(){
        return `area is undefined`;
    }
    getperimeter(){
        return `area is undefined`;
    }
}

class square extends shape{
    constructor(side){
        super("squre");
        this.side=side;
    }
}