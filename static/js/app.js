// from data.js
var ufo = data;

// YOUR CODE HERE!
let button= d3.select("#filter-btn");

function runFilter(date) {
    let filteredData = ufo.filter(uf => uf.datetime === date);
        console.log(filteredData);
return filteredData
};

const runDOM= () => {
    // prevent page from refreshing
    d3.event.preventDefault();
    // clear out table for if user tried multiple dates

    //select input element and get the value property of input
    let inputElement= d3.select("#datetime").property("value");
        console.log(inputElement);
    // set data to input date filtered
    let ufoData= runFilter(inputElement);
        console.log(ufoData)
    // populate table
    const tbody = d3.select("tbody");
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
// text.on("submit", runFilter);
