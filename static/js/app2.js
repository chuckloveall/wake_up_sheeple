// from data.js
var ufo = data;

// declare buttons and form submission to be referenced later
let button= d3.select("#filter-btn");
let form= d3.select("#form");
// populate table on page load
const tbody = d3.select("tbody");
ufo.forEach(sighting => {
  let row = tbody.append("tr");
  Object.values(sighting).forEach(value => {
    let cell = row.append("td");
    cell.text(value);
  });
});

function runFilter(usedf) {
    // input is a dictionary with keys and values
    // console.log(usedf)
    // concatenated method grabbing array of all filter values
    // method sunsetted- didn't grab empty values
    // let filtered= ufo
    // .filter(sighting => sighting.datetime === current)
    // .filter(sighting => sighting.city === city)
    // .filter(sighting => sighting.state === state)
    // .filter(sighting => sighting.country === country)
    // .filter(sighting => sighting.shape === shape)
    let filteredData= ufo;
    Object.entries(usedf).forEach(([key,value]) => {
    filteredData = filteredData.filter(sighting => sighting[key] === value)
    });


    // console.log(filteredData)
    return filteredData
};

const runDOM= () => {
    // prevent page from refreshing
    // d3.event.preventDefault();

    //select input element and get the value property of input
    // this method grabs all the info in the filters, but was
    // returning empty arrays- needs more troubleshooting
    // now sunsetted
    // let inputElement= d3.selectAll("#filters>li")._groups;

        // d3.select(inputElement).input()

    // this is essentially standalone Function
    //grab the filters used and put into dictionary
    let filters= {
        datetime: d3.select("#datetime").property("value"),
        city: d3.select("#city").property("value"),
        state: d3.select("#state").property("value"),
        country: d3.select("#country").property("value"),
        shape: d3.select("#shape").property("value")
    };
        let usedfilters= {};
        //iterate through using Object.entries
        // grab each key,value
        // check if not empty, then add to dictionary if used
        Object.entries(filters).forEach(([key,value]) => {
        console.log(key)
        console.log(value)
        if (value !== "") {
            usedfilters[key] = value;
        }
    });
    // console.log(usedfilters);
    let newdata= runFilter(usedfilters);
    //clear table before
    //select parent
    tbody.html(" ");
    // set data to input date filtered
    // let ufoData= runFilter(filters);
    //     console.log(ufoData);
    // use filter function on input to populate table with input date
    newdata.forEach(sighting => {
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
