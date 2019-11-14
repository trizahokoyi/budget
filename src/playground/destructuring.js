//OBJECT DESTRUCTION
const person = {
    name: 'Venice',
    age: 25,
    location: {
        city: 'Miami',
        temp: 95
    }
};
var payload = {
    incrementBy: 7
}
console.log(payload.incrementBy);

var {incrementBy} = payload;
console.log(incrementBy);
const {name} = person;

//console.log(temp);
//console.log(city);
//console.log(name);

//ARRAY DESTRUCTION
const address = ['1000 Jupiter St','Berlin', 'Germany', '191AT'];
//console.log(addrees[1]);

const [street, mysport, place, code] = address;
console.log(mysport);