// from data.js
var filteredData = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value")
var inputValueCity = d3.select("#city").property("value");
var inputValueState = d3.select("#state").property("value");
var inputValueCountry = d3.select("#country").property("value");
var inputValueShape = d3.select("#shape").property("value");

if (inputValue != ""){
  filteredData = filteredData.filter(UFOsighting=> UFOsighting.datetime === inputValue); 
}
if (inputValueCity != ""){
  filteredData = filteredData.filter(UFOsighting=> UFOsighting.city === inputValuecity); 

}
if (inputValueState != ""){
  filteredData = filteredData.filter(UFOsighting=> UFOsighting.state === inputValueState); 
}
if (inputValueCountry != ""){
  filteredData = filteredData.filter(UFOsighting=> UFOsighting.country === inputValueCountry); 
}

if (inputValueShape != ""){
  filteredData = filteredData.filter(UFOsighting=> UFOsighting.shape === inputValueShape); 
}
// Get a reference to the table body
var tbody = d3.select("tbody");
tbody.html("")
// Loop Through `data` and console.log each weather report object

filteredData.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
})
})
