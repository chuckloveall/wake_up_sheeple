# WAKE UP Sheeple
A list of UFO sightings proving definitively that aliens are among us.

Filters can be used and a button pushed to interact with the table and populate it with relevant information.

Upon page load
==============
The page will populate the table of UFO sightings. It will also display a nice message to let everyone know the TRUTH.

### Format of Code
- index.html defaults to using app2.js to allow for more complex filtering.
    - To use a basic filter of only the date, uncomment app.js script in index.html, and comment app2.js.
- Basic filtering the table by date is contained in app.js.
- Complex filtering of the table using more than one field is done in app2.js.
- Data is in static > js > data.js, it is only two weeks of data from 2010.
    - All data is in a string format with non-standard format, thus filtering by time elapsed is not realistic.
