// --------------------------> Activity 1 <--------------------------------
// Task 1
let articleEditBtn = document.getElementById("btnEdit")
articleEditBtn.addEventListener("click", () => {
    let text = prompt("Change the text");
    document.querySelector("p").innerText = text;
});

//Task 2
const myImage = document.querySelector(".images");
myImage.addEventListener("toggle", (params) => {
  
}
)