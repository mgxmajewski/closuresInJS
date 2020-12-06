function dogHouse() {
    let dogs = 8;
    return function() {
        dogs++;
        return dogs + 'dogs';
    }
}

let counter1 = dogHouse();
let counter2 = dogHouse();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2()+'second');



