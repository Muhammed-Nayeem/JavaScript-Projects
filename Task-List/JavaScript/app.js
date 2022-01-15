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

//define removeTask function:
function removeTask(e) {
  if (e.target.classList.contains("delete")) {
    // e.target.parentElement.remove();
    let li = e.target.parentElement;
    listItems.removeChild(li);
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
