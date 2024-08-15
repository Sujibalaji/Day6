
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send();
request.onload = function () 
{
  var result = JSON.parse(request.response);
  //console.log(result);

  // a. Get all the countries from Asia continent /region using Filter method

var country_name = result.filter((ele) => ele.region == "Asia" || ele.continents == "Asia").map((ele) => ele.name.common);
console.log("All the countries from Asia continent /region");
console.log(country_name);

  // b.Get all the countries with a population of less than 2 lakhs using Filter method

var allcountry = result.filter((ele) => ele.population < 200000).map((ele) => ele.name.common)
console.log("All the countries with a population of less than 2 lakhs")
console.log(allcountry);

  // c.Print the following details name, capital, flag, using forEach method
console.log("Name, Capital and Flag")
var output1 = result.forEach(
    (ele) => {
      var name = ele.name.common;
      const capital = ele.capital ? ele.capital[0] : "No Information";
      var flag = ele.flag;
      console.log(name, capital, flag)
    }
  )

  // d.Print the total population of countries using reduce method

var total_population = result.reduce((accumulator, current_value) => { return accumulator + current_value.population }, 0);

console.log("The total population is",total_population);

  //e.Print the country that uses US dollars as currency.

var USdollar = result.filter((ele) => ele.currencies && ele.currencies.USD).map((ele) => ele.name.common);
console.log("Countries using USD")

console.log(USdollar);
  
}


