// --------------------------> Activity 1 <--------------------------------
// Task 1
let articleEditBtn = document.getElementById("btnEdit")
articleEditBtn.addEventListener("click", () => {
    let text = prompt("Change the text");
    document.querySelector("p").innerText = text;
});

//Task 2
let visible = true;
// accessing the image
let myImage = document.querySelector("#img1");
// adding the double click event
myImage.addEventListener("dblclick", () => {
    // checking & updatingvisbility
    if (visible) {
        myImage.style.opacity ="0";
    } 
    else{
        myImage.style.opacity ="1";
    }
    // updating visibilty
    visible = !visible;
});

// --------------------------> Activity 2 <--------------------------------
// Task 3
let paragraph = document.querySelector(".article");

paragraph.addEventListener("mouseover", () => {
    paragraph.style.backgroundColor = "orange";
});

// Task 4
paragraph.addEventListener("mouseout", () => {
    paragraph.style.backgroundColor = "var(--bgColor2)";
});

// --------------------------> Activity 3 <--------------------------------
// Task 5
let nameFeild = document.getElementById("InputName");
nameFeild.addEventListener("keydown", (e) => {
  console.log("Key pressed",e.key)
});

// Task 6
nameFeild.addEventListener("keyup", (e) => {
  console.log("Key released",e.key)
})

// --------------------------> Activity 4 <--------------------------------
// Task 7
let submitBtn = document.getElementById("btnFormSub");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
})

// Task 8
let selectInput = document.getElementById("selectCity");
let resultPara = document.querySelector(".result").firstElementChild;
let str;

selectInput.addEventListener("change", (e) => {
  str = `You live in ${e.target.value}`;
  resultPara.textContent = str;
  console.log(str);
})

// --------------------------> Activity 4 <--------------------------------
// Task 9
const list = document.querySelector(".list");

list.addEventListener("click", (e) => {
  //  let listItem = e.target; //  console.log(listItem.innerText);
  if(e.target.tagName === "LI"){
    console.log(e.target.innerText);
  }
});

// Task 10
const newList = document.getElementById("list2");
// const fastFoods = ["fish and chips", "sandwiches", "pitas", "hamburgers", "fried chicken", "french fries", "onion rings", "chicken nuggets"];

newList.addEventListener("click", function (e){
  console.log(e.target.textContent)
})
const addItem = document.getElementById("addItems");
addItem.addEventListener("click", function(e){
  const newListItem = document.createElement("li")
  newListItem.textContent = prompt("Add new Fast food item");
  newList.appendChild(newListItem);
})

