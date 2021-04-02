const tbody = d3.select("tbody");
ufo.forEach(sighting => {
  let row = tbody.append("tr");
  Object.values(sighting).forEach(value => {
    let cell = row.append("td");
    cell.text(value);
  });
});

function runFilter() {
    const {datetime= '', city= '', state='', country= '', shape= ''}= this.state;
    let filtered= [...posts];
    filtered= filtered
    .filter(post => post.datetime)
    .filter(post => post.city)
    .filter(post => post.state)
    .filter(post => post.country)
    .filter(post => post.shape)

    console.log(filtered)
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
