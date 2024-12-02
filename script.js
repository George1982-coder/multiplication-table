document.addEventListener("DOMContentLoaded", () => {
  const tableConteiner = document.getElementById("Multipication-table");

  const table = document.createElement("table");

  for (let i = 0; i <= 10; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j <= 10; j++) {
      const cell = document.createElement(i === 0 || j === 0 ? "th" : "td");
      if (i === 0 && j === 0) {
        cell.textContent = "X";
      } else if (i === 0) {
        cell.textContent = j;
        cell.dataset.column = j;
        cell.classList.add("header-col");
      } else if (j === 0) {
        cell.textContent = i;
        cell.dataset.row = i;
        cell.classList.add("header-row");
      } else {
        cell.textContent = i * j;
        cell.dataset.row = i;
        cell.dataset.column = j;
      }

      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  tableConteiner.appendChild(table);

  const headerCols = table.querySelectorAll(".header-col");
  const headerRows = table.querySelectorAll(".header-row");

  const cells = table.querySelectorAll("td");

  let selectedRow = null;
  let selectedCol = null;

  headerCols.forEach((column) => {
    column.addEventListener("click", () => {
      selectedCol = parseInt(column.dataset.column, 10);
      highlightCell(selectedRow, selectedCol);
    });
  });

  headerRows.forEach((row) => {
    row.addEventListener("click", () => {
      selectedRow = parseInt(row.dataset.row, 10);
      highlightCell(selectedRow, selectedCol);
    });
  });

  function highlightCell(row, col) {
    cells.forEach((cell) => cell.classList.remove("highlight"));
    if (row && col) {
      cells.forEach((cell) => {
        if (
          parseInt(cell.dataset.row) === row &&
          parseInt(cell.dataset.column) === col
        ) {
          cell.classList.add("highlight");
        }
      });
    }
  }
});
