// select all the elements:
let forms = document.getElementById("forms");
showUserData();

// Add Event Listener:
forms.addEventListener("submit", function (e) {
  e.preventDefault();
  let userData = {};
  let isValid = false;
  let formsElement = [...forms.elements];
  formsElement.forEach((element) => {
    if (element.type !== "submit") {
      isValid = validator(element);
      if (isValid) {
        userData[element.name] = element.value;
      } else {
        alert(`${element.name} value is required!`);
      }
    }
  });
  if (isValid) {
    this.reset();
    setDataToLocalStorage(userData);
  }
});

// Function to Save the Data to LocalStorage:
function setDataToLocalStorage(userData) {
  let userProfiles;
  if (localStorage.getItem("userProfiles")) {
    userProfiles = JSON.parse(localStorage.getItem("userProfiles"));
  } else {
    userProfiles = [];
  }
  userProfiles.push(userData);
  localStorage.setItem("userProfiles", JSON.stringify(userProfiles));
  showUserData();
}

// Function to get the Data from LocalStorage:
function showUserData() {
  let userProfiles;
  if (localStorage.getItem("userProfiles")) {
    userProfiles = JSON.parse(localStorage.getItem("userProfiles"));
  } else {
    userProfiles = [];
  }

  let markUpText = "";
  userProfiles.forEach(user => {
    markUpText += `
    <div class="single-profile">
    <h3 class="full-name">Name: ${user.firstName} ${user.lastName}</h3>
    <ul class="list-info" id="list">
      <li class="nav-item">Age: ${user.age}</li>
      <li class="nav-item">Profession: ${user.profession}</li>
      <li class="nav-item">Email: ${user.email}</li>
      <li class="nav-item">Phone: ${user.phone}</li>
      <li class="nav-item">Country: ${user.country}</li>
    </ul>
    </div>
    `;
  });
  let profileContainer = document.getElementById("show-profile");
  if (userProfiles.length !== 0) {
    profileContainer.innerHTML = markUpText;
  }
}

// Simple Validator Function:
function validator(element) {
  if(!element.value) {
    return false;
  } else {
    return true;
  }
}
