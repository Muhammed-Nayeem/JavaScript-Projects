//Select all the elements & assigning them to variable:
let form = document.getElementById("form");
let fullName = document.getElementById("full-name");
let dob = document.getElementById("dob");
let profession = document.getElementById("prof");
let salary = document.getElementById("salary");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let errorMsg = document.getElementById("error-msg");
let userTable = document.getElementById("user-table");
let addBtn = document.getElementById("add-btn");

//add event listener on form:
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  formValidation();
});

//form validation:
const formValidation = () => {
  if (fullName.value === "") {
    errorMsg.textContent = "Name cannot be blank!";
    errorMsg.style.color = "red";
  } else {
    errorMsg.textContent = "";
    storeData();
    addBtn.setAttribute("data-bs-dismiss", "modal");
    addBtn.click();

    (() => {
      addBtn.setAttribute("data-bs-dismiss", "");
    })();
  }
};

//create an empty object that keeps the data:
let userData = [];

//accept & store data from the form:
const storeData = () => {
  userData.push({
    name: fullName.value,
    dob: dob.value,
    profession: profession.value,
    salary: salary.value,
    email: email.value,
    phone: phone.value,
  });

  //set the user data in localStorage:
  localStorage.setItem("userData", JSON.stringify(userData));
  createUser();
};

//create user with the collected data and upload on screen:
const createUser = () => {
  userTable.innerHTML = "";
  userData.map((user, ind) => {
    return (userTable.innerHTML += `
      <tr id=${ind}>
        <td>${user.name}</td>
        <td>${user.dob}</td>
        <td>${user.profession}</td>
        <td>${user.salary}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td><i onclick="viewUserInfo(this)" class="fa-solid fa-eye" id="view" data-bs-toggle="modal" data-bs-target="#form"></i></td>
        <td><i onclick="editUserInfo(this)" class="fa-solid fa-pen-to-square" id="edit" data-bs-toggle="modal" data-bs-target="#form"></i></td>
        <td><i onclick="deleteUser(this); createUser()" class="fa-solid fa-trash-can" id="delete"></i></td>
      </tr>
    `);
  });
  resetForm();
};

//view user information:
const viewUserInfo = (ev) => {

  setAndView(ev);

  fullName.setAttribute("readonly", "true");
  dob.setAttribute("readonly", "true");
  profession.setAttribute("readonly", "true");
  salary.setAttribute("readonly", "true");
  email.setAttribute("readonly", "true");
  phone.setAttribute("readonly", "true");
  addBtn.disabled = true;
};

//delete user:
const deleteUser = (ev) => {
  ev.parentElement.parentElement.remove();
  userData.splice(ev.parentElement.parentElement.id, 1);
  localStorage.setItem("userData", JSON.stringify(userData));
};

//edit and update user:
const editUserInfo = (ev) => {

  setAndView(ev);

  fullName.removeAttribute("readonly");
  dob.removeAttribute("readonly");
  profession.removeAttribute("readonly");
  salary.removeAttribute("readonly");
  email.removeAttribute("readonly");
  phone.removeAttribute("readonly");
  addBtn.disabled = false;
  deleteUser(ev);
};

//set and view user info:
const setAndView = (ev) => {
  let selectedUser = ev.parentElement.parentElement;
  fullName.value = selectedUser.children[0].innerHTML;
  dob.value = selectedUser.children[1].innerHTML;
  profession.value = selectedUser.children[2].innerHTML;
  salary.value = selectedUser.children[3].innerHTML;
  email.value = selectedUser.children[4].innerHTML;
  phone.value = selectedUser.children[5].innerHTML;
};

//reset the form:
const resetForm = () => {
  fullName.value = "";
  dob.value = "";
  profession.value = "";
  salary.value = "";
  email.value = "";
  phone.value = "";
};

//get the data from localStorage and load in screen:
(() => {
  userData = JSON.parse(localStorage.getItem("userData")) || [];
  createUser();
})();

