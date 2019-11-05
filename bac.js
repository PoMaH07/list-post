// number
var a = 15;

//string
var fignya = 'h1'

//Boolean (true and false)
var isSum = 5 > 5;

//undefined
var undef;

// null
var myNull = document.querySelector('body2');

// object
// 1 massive
var cities = ['Dnipro', 'Kiev', 'Harkov', 'Odessa'];
cities.push('London');

// 2 object
var user = {
    age: 25,
    email: 'vasa@gmail.com',
    name: 'Vasa',
};
user.postcode = 49000;

var users = [
    {name: 'Vasa', age: 25, phone: '+38099456'},
    {name: 'Pit', age: 35, phone: ''},
    {name: 'Anna', age: 36, phone: ''},
];

var useres = [
    {name: 'Vasa', age: 25, phones: ['38099', '+38050']},
    {name: 'Pit', age: 35, phone: ''},
    {name: 'Anna', age: 36, phone: ''},
];

console.log(useres[0].phones[1]);

// Операторы добавления
var a = 2;
var b = 1;

          //3   //0   //3   //0
var res = ++a + --b + a++ + b++;

console.log(res); // 6



// Цикл который делает выборку из массива
var names = ['vasa', 'petya', 'anya', 'kolya', 'dima'];
    
        //начальное  // по длине массива  // увеличиваем на 1
for(var i=0; i < names.length; i++) {
    console.log(names[i]); //выводим все названия в массиве

for(var i in names) {  // упращенный вид FOR IN
        console.log(names[i]);
}

for(var i of names) { // более упращенный 
    console.log(i);
}



Создание лишек с массива
var names = ['vasa', 'petya', 'anya', 'kolya', 'dima'];

var cont = document.querySelector('#block');
console.log(cont);

var res = '';

for(var name of names) {
    res+= ` <li>${name}</li>`;
};

cont.innerHTML=res;



'use strict'

var names = ['vasa', 'petya', 'anya', 'kolya', 'dima'];
var cities = ['dnepr', 'odessa', 'Kiev', 'Kharkov'];


function render (data, containerId) {
var cont = document.querySelector(containerId);
console.log(cont);

var res = '';

for(var item of data) {
    res+= ` <li>${item}</li>`;
};

cont.innerHTML=res;
} 

render(cities, '#cities');
render(names, '#names');