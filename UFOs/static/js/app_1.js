
// // import the data from data.js
const tableData = data;

// // reference the HTML table using d3
var tbody = d3.select("tbody");

// start a new function to build a new table.
function buildTable(data) {
    // first, clear out any existing data
    tbody.html("");

    // incorporate a forEach function that loops through the data array
    // then adds a rows of data to the table.
    data.forEach((dataRow) => {
        // append a row to the table body  
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and 
        // add each value as a table cell(td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    //Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //Check to see if a date was entered and filter the data using that date.
    if (date) {
        // apply 'filter' to the table data to only keep the rows where the 'datetime' value 
        // matches the filtwer value
        filteredData = filteredData.filter(row => {            
            return  row.datetime === date
        });
        console.log (  'there are ' + filteredData.length)
    }

    //Rebuild the table using the filtered data
    //@Note: If no date was entered. then filteredData will
    //just be the originak tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button.
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);
