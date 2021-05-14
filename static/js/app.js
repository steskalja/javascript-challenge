// from data.js
var tableData = data;

let dPicked;

function GetDate(row){
    if(row.datetime === dPicked)
    {   
        return row
    };
}
// YOUR CODE HERE!


//console.log(rows);

let btn = d3.select('#filter-btn')

function BuildTable(dataT,tData,tColumns)
{
    let table = d3.select(`#${dataT}`)
    let	tbody = table.select('tbody');
    tbody.selectAll("*").remove();
    let rows = tbody.selectAll('tr')
		  .data(tData)
		  .enter()
		  .append('tr');

		// create a cell in each row for each column
	let cells = rows.selectAll('td')
		  .data(function (row) {
		    return tColumns.map(function (column) {
		      return {column: column, value: row[column]};
		    });
		  })
		  .enter()
		  .append('td')
		    .text(function (d) { return d.value; });

	  return table;


}

btn.on('click',()=>{
    const iElement = d3.select('#datetime')
    dPicked = iElement.property("value");
    const rows = tableData.filter(GetDate);
    let columns = []
    if(rows.length > 0)
    {
        const keycount = Object.keys(rows[0]).length;
        for(var j =0; j < keycount; j++)
        {
            columns.push(Object.keys(rows[0])[j]);
        }
    }
    BuildTable('ufo-table',rows,columns);

})