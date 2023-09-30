const table = document.getElementById('os_table');
let activeRow = 1;

function highlight(row) {
    const prevRow = table.rows[activeRow];
    previousRow.classList.remove('active');

    activeRow = (row + table.rows.length) % table.rows.length;

    const activeTableRow = table.rows[activeRow];
    activeTableRow.classList.add('active');

    function openlink(){
        const link = linkCell.querySelector('a');

        if (link){
            console.log('openlink')
        }
    }

}

