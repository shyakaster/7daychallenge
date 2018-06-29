  // Select input
    let height = $('#inputHeight');
    let width = $('#inputWidth');

    // Select the color here
    let colorPicker = $('#colorPicker');

    // Select the canvas
    const canvas = $('#pixelCanvas');

    // Make Grid when user inputs sizes
    function makeGrid() {
        // user inputs height and width
        let gridHeight = height.val();
        let gridWidth = width.val();
        // Make the rows and columns happen
        canvas.append('<tbody></tbody>');
        let canvasBody = canvas.find('tbody');
        // Make the rows happen
        for (let x = 0; x < gridWidth; x++) {
            canvasBody.append('<tr></tr>');
        }
        // Make the columns happen
        for (y = 0; y < gridHeight; y++) {
            canvas.find('tr').append('<td></td>');
        }
    }
    //This color will be the background color of the when the box is clicked
    canvas.on('click', "td", function(){
        var color = $('#colorPicker').val();
            $(this).attr("bgcolor", color);
    });
   // Click the button to make the grid table
    $(document).ready(function () {
        $('button[type="button"]').on('click', function (e) {
            e.preventDefault();
            makeGrid();
        });

    });