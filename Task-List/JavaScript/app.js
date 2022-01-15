//select all elements & assigning them to variables:
const formElement = document.getElementById("addForm");
const listItems = document.getElementById("items");
const filterItem = document.getElementById("filter");

//invoked loadEventListener:
loadEventListener();

//define a function for all add event listener:
function loadEventListener() {
  //add task event
  formElement.addEventListener("submit", addTask);

  //remove task event
  listItems.addEventListener("click", removeTask);

  //filter task event
  filterItem.addEventListener("keyup", filterTask);
}

//define addTask event handler function:
function addTask(e) {
  e.preventDefault();
  let inputField = document.getElementById("input");

  //input validate function:
  if (inputValidate(inputField.value)) {
    //create li element:
    let item = createElements("li");
    item.appendChild(document.createTextNode(inputField.value));
    item.className = "list-group-item";

    //create remove button:
    let removeBtn = createElements("button");
    removeBtn.textContent = "X";
    removeBtn.className = "btn btn-danger btn-sm float-end delete";

    //append this remove button in li-item:
    item.appendChild(removeBtn);

    //append new item in listItems group:
    listItems.appendChild(item);
    inputField.value = "";
    // this.reset();
  }
}

//define inputValidate function:
function inputValidate(input) {
  //if input value isn't empty:
  if (input) {
    if (confirm("Do you really want to add this in your item list?")) {
      return true;
    }
  } else {
    alert("You haven't entered any data! Please provide valid data!");
  }
}

//define removeTask function:
function removeTask(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      // e.target.parentElement.remove();
      let li = e.target.parentElement;
      listItems.removeChild(li);
    }
  }
}

//define filterTask function:
function filterTask(e) {
  //convert the letter into lower case:
  let text = e.target.value.toLowerCase();
  let items = listItems.getElementsByTagName("li");
  [...items].forEach((item) => {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

//create elements function:
function createElements(tagName) {
  let newElement = document.createElement(tagName);
  return newElement;
}
