// 1. solving problems using array functions on rest countries data(https://restcountries.com/v3.1/all)
//a). get all the countries from ASIA continent/region using filter funcion.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
//    // console.log(data);
   var result =JSON.parse(data);
//    //console.log(result);

var output = result.filter((ele)=>console.log(`countries:${ele.continents},region:${ele.region}`))
}
// b)get all the countries with apopulation of less than 2 lakhs using filter function

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function(){
    var data1 = request1.response;
   // console.log(data);
   var result1 =JSON.parse(data1);
   //console.log(result);
   var total = result1.filter((ele)=>console.log(ele.countries>200000))
}

// c) print the following details name,capital,flag using for each function
//map function
var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send();
request2.onload = function(){
    var data2 = request2.response;
   // console.log(data);
   var result2 =JSON.parse(data2);
   //console.log(result);
   var result2 = result2.map((ele)=>console.log(`${ele.name.common},${ele.capital},${ele.flags.png}`))
}
// filter function
var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true)
request3.send();
request3.onload = function(){
    var data3 = request3.response;
   // console.log(data);
   var result3 =JSON.parse(data3);
   //console.log(result);
   var result3 = result3.filter((ele)=>console.log(`${ele.name.common},${ele.capital},${ele.flags.png}`))
}
//reduce function
var request4 = new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true)
request4.send();
request4.onload = function(){
    var data4 = request4.response;
   // console.log(data);
   var result4 =JSON.parse(data4);
   //console.log(result);
   var result4 = result4.reduce((acc,cv)=>console.log(`${acc,cv.name.common},${acc,cv.capital},${acc,cv.flags.png}`))
}
//d). print the total population of countries using reduce function

var request5 = new XMLHttpRequest();
request5.open("GET","https://restcountries.com/v3.1/all",true)
request5.send();
request5.onload = function(){
    var data5 = request5.response;
//     console.log(data5);
   var result5 =JSON.parse(data5);
//    console.log(result5);
    var result5 = result5.reduce((acc,cv)=>acc+cv.population,0)
    console.log(result5);
}
//e). print the country that uses s dollors as currency.
var request6 = new XMLHttpRequest();
request6.open("GET","https://restcountries.com/v3.1/all",true)
request6.send();
request6.onload = function(){
    var data6 = request6.response;
    //console.log(data6);
   var result6 =JSON.parse(data6);
   //console.log(result6);
   var currency = result6.filter((value)=>value.currencies && value.currencies.USD)
   currency.forEach((value)=>console.log(value.name.common))
}