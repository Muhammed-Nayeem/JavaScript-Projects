// select all the elements and assign them to variables:
let form = document.getElementById("form");
let postField = document.getElementById("post-field");
let statusMsg = document.getElementById("status-msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  // console.log("Button Clicked!");
  formValidation();
});

const formValidation = () => {
  if (postField.value === "") {
    statusMsg.textContent = "post can not be blank!";
    statusMsg.style.color = "#f00d0d";
    statusMsg.style.backgroundColor = "#ff3b3b1c";
    statusMsg.style.border = "1px solid #f00d0d";
    statusMsg.style.display = "block";
  } else {
    statusMsg.textContent = "successful your post";
    statusMsg.style.color = "#008000";
    statusMsg.style.backgroundColor = "#0af80a2d";
    statusMsg.style.border = "1px solid #008000";
    statusMsg.style.display = "block";
    getData();
  }
};

let data = {};

const getData = () => {
  data["text"] = postField.value;
  console.log(data);
  createPost();
};

const createPost = () => {
  posts.innerHTML += `
  <div class="single-post">
    <p id="post-text">${data.text}</p>
    <span class="control-icons">
      <i onclick="editPost(this)" class="fa-solid fa-pen-to-square" id="edit"></i>
      <i onclick="deletePost(this)" class="fa-solid fa-trash-can" id="trash"></i>
    </span>
  </div>
  `;
  postField.value = "";
};

const deletePost = (ev) => {
  ev.parentElement.parentElement.remove();
};

const editPost = (ev) => {
  postField.value = ev.parentElement.previousElementSibling.innerHTML;
  ev.parentElement.parentElement.remove();
};
