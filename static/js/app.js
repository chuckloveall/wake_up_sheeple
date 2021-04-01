// from data.js
var ufo = data;

// YOUR CODE HERE!
let button= d3.select("#filter-btn");
let form= d3.select("#form");
// on page load, load Table with ufo data
// populate table
const tbody = d3.select("tbody");
ufo.forEach(sighting => {
  let row = tbody.append("tr");
  Object.values(sighting).forEach(value => {
    let cell = row.append("td");
    cell.text(value);
  });
});

function runFilter(date) {
    let filteredData = ufo.filter(uf => uf.datetime === date);
        console.log(filteredData);
return filteredData
};

const runDOM= () => {
    // prevent page from refreshing
    d3.event.preventDefault();

    //select input element and get the value property of input
    let inputElement= d3.select("#datetime").property("value");
        console.log(inputElement);
    //clear table before
    //select parent
    tbody.html(" ");
    // set data to input date filtered
    let ufoData= runFilter(inputElement);
        console.log(ufoData);
    // use filter function on input to populate table with input date
    ufoData.forEach(sighting => {
      let row = tbody.append("tr");
      Object.values(sighting).forEach(value => {
        let cell = row.append("td");
        cell.text(value);

      });
    });
}

button.on("click",runDOM);
form.on("submit", runDOM);
