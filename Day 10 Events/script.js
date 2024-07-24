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

// --------------------------> Activity 1 <--------------------------------
// Task 3
let paragraph = document.querySelector(".article");

paragraph.addEventListener("mouseover", () => {
    paragraph.style.backgroundColor = "orange";
});

// Task 4
paragraph.addEventListener("mouseout", () => {
    paragraph.style.backgroundColor = "var(--bgColor2)";
});

// --------------------------> Activity 1 <--------------------------------
// Task 5
