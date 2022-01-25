//Copy Section:
const copyText = document.getElementById("copyText");
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(copyText.value);
  alert("Copied Successfully");
});

//Cut Section:
const cutText = document.getElementById("cutText");
const cutBtn = document.getElementById("cutBtn");

cutBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(cutText.value);
  cutText.value = "";
});

//Paste Section:
const pasteText = document.getElementById("pasteText");
const pasteBtn = document.getElementById("pasteBtn");

pasteBtn.addEventListener("click", () => {
  pasteText.value = "";
  navigator.clipboard.readText().then((text) => {
    pasteText.value = text;
  });
});
