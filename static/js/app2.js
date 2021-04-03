// from data.js
var ufo = data;


let button= d3.select("#filter-btn");
let form= d3.select("#form");

const tbody = d3.select("tbody");
ufo.forEach(sighting => {
  let row = tbody.append("tr");
  Object.values(sighting).forEach(value => {
    let cell = row.append("td");
    cell.text(value);
  });
});

function runFilter(somearray) {
    somearray // determine what is in somearray
    // parse each datetime, city, etc
    console.log(current)
    let filtered= ufo
    .filter(sighting => sighting.datetime === datetime)
    .filter(sighting => sighting.city === city)
    .filter(sighting => sighting.state === state)
    .filter(sighting => sighting.country === country)
    .filter(sighting => sighting.shape === shape)

    console.log(filtered)
};

const runDOM= () => {
    // prevent page from refreshing
    d3.event.preventDefault();

    //select input element and get the value property of input
    let inputElement= d3.selectAll("#filters>li")._groups;
        // d3.select(inputElement).input()

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
};

// d3.selectAll(".form-control").property("value").on("click")
button.on("click",runDOM);
form.on("submit", runDOM);
