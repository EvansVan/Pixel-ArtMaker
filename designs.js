//variables to get canvas element,height,width
const c = document.getElementById('pixel_canvas');
let height1 = $("#input_height");
let width1 = $("#input_width");

//An event listener that comes into action when Submit button is clicked .
$('#input_submit').click(function(e) {
    e.preventDefault();
    makeGrid();
});

let color = $("#colorPicker");

//Called whenever button is clicked.
function makeGrid() {

    c.innerHTML = '';
    let height = height1.val();
    let width = width1.val();

    //Fills color in the cell with the chosen color.
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    //An event listener that changes the color in a cell when its clicked.
    for (let i = 0; i < height; i++) {
        let row = c.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}
