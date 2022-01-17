let selectedRow = null;
const submitBtn = document.querySelector(".button");
submitBtn.addEventListener("click", addEmployee);

function addEmployee() {
  let employsData = readEmployeeData();
  if (selectedRow === null) {
    insertData(employsData);
  } else {
    updateRecord(employsData);
  }
  resetInput();
}

function readEmployeeData() {
  const employData = {};
  employData["name"] = document.querySelector(".name").value;
  employData["des"] = document.querySelector(".designation").value;
  employData["mob"] = document.querySelector(".mobile").value;
  employData["sal"] = document.querySelector(".salary").value;
  return employData;
}

function insertData(empData) {
  const table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
  let row = table.insertRow(table.length);
  let td1 = row.insertCell(0);
  let td2 = row.insertCell(1);
  let td3 = row.insertCell(2);
  let td4 = row.insertCell(3);
  let td5 = row.insertCell(4);
  let td6 = row.insertCell(5);

  td1.innerHTML = table.rows.length - 1;
  td2.innerHTML = empData.name;
  td3.innerHTML = empData.des;
  td4.innerHTML = empData.mob;
  td5.innerHTML = empData.sal;
  td6.innerHTML = `<a class="edt" onclick="editData(this)">Edit</a> / <a class="delete" onclick="onDelete(this)">Delete</a>`;
}

function resetInput() {
  document.querySelector(".name").value = "";
  document.querySelector(".designation").value = "";
  document.querySelector(".mobile").value = "";
  document.querySelector(".salary").value = "";
  selectedRow = null;
}

function editData(td) {
  selectedRow = td.parentElement.parentElement;
  document.querySelector(".name").value = selectedRow.cells[1].innerHTML;
  document.querySelector(".designation").value = selectedRow.cells[2].innerHTML;
  document.querySelector(".mobile").value = selectedRow.cells[3].innerHTML;
  document.querySelector(".salary").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(employData) {
  selectedRow.cells[1].innerHTML = employData.name;
  selectedRow.cells[2].innerHTML = employData.des;
  selectedRow.cells[3].innerHTML = employData.mob;
  selectedRow.cells[4].innerHTML = employData.sal;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetInput();
  }
}
