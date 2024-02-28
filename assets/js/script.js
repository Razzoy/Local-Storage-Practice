//LOCAL

localStorage.setItem('name', 'Bob')
// console.log(localStorage.getItem('name'))
localStorage.removeItem('name')


//SESSION

sessionStorage.setItem('name', 'John')
// console.log(sessionStorage.getItem('name'))
sessionStorage.removeItem('name')
sessionStorage.setItem('name', 'Bob')


//COOKIES

document.cookie = 'name=Kyle; expires=' + new Date(2026, 0, 1).toUTCString()

document.cookie = 'lastName=Smith; expires=' + new Date(2026, 0, 1).toUTCString()


let myObj = {
    name: 'Domenic',
    age: 56
};

let myObj_serialized = JSON.stringify(myObj);
console.log(myObj_serialized);

localStorage.setItem('myObj', myObj_serialized);

let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'));

console.log(myObj_deserialized);