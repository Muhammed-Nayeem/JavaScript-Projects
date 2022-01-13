//select all the elements & assigning them to variables:
const todoForm = document.querySelector(".todo");
const todoList = document.querySelector(".todobody ul");

//add event listener on todoList:
todoList.addEventListener("click", (e) => {
  //if the targeted element is li item than we'll take action:
  if (e.target.tagName === "LI") {
    if (e.target.classList.contains("done")) {
      e.target.classList.remove("done");
    } else {
      e.target.classList.add("done");
    }
  }

  //check the remove button was clicked or not:
  if (e.target.classList.contains("remove")) {
    //if it is clicked than removed the immediate parent:
    e.target.parentElement.remove();
  }
});

//add event listener on todoForm:
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //read the input field value:
  const inputValue = e.target.task.value;

  //input validation check:
  if (inputValidate(inputValue, e.target.task)) {
    //if input is valid than we'll add this in todoList:
    todoList.insertAdjacentElement("afterbegin", newItem(inputValue));
    e.target.task.value = "";
  }
});

//define inputValidate function:
const inputValidate = (input, element) => {
  //if input isn't empty:
  if (input) {
    element.parentElement.classList.remove("error");
    return true;
  } else {
    element.parentElement.classList.add("error");
    return false;
  }
};

//define newItem function:
const newItem = (content) => {
  //create new list item:
  const listItem = document.createElement("li");
  listItem.textContent = content;

  //add remove button in new list item:
  listItem.insertAdjacentElement("afterbegin", removeButton());
  return listItem;
};

//define removeButton function:
const removeButton = () => {
  //create a span tag that'll contains remove button class:
  const removeBtn = document.createElement("span");
  removeBtn.classList.add("remove");
  removeBtn.textContent = "X";
  return removeBtn;
};
