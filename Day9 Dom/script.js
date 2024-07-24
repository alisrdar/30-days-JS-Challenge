// --------------------------> Activity 1 <--------------------------------
// Task 1
document.getElementById("box1").innerText = "This is day 9 of Javascript Challenge";

// Task 2
document.querySelector(".box").style.backgroundColor = "orange"; //Changes first box

// --------------------------> Activity 2 <--------------------------------
// Task 3
let newDiv = document.createElement("div");
newDiv.innerHTML = "I was dynamically created <br><br> <i> using JS </i> ";

//adding it to the body
document.body.append(newDiv);

// Task 4
let listItem = document.createElement("li");
listItem.innerText = "Water Melon";

document.querySelector("ul").appendChild(listItem);

// --------------------------> Activity 2 <--------------------------------
// Task 5
let delElement = document.querySelector("#box4")
delElement.remove();

// Task 6
let boxes = document.querySelector(".container");
boxes.lastElementChild.remove(); //#box8 removed

// --------------------------> Activity 3 <--------------------------------
// Task 7
let img1 = document.querySelector(".images")
img1.firstElementChild.setAttribute("src", "https://miro.medium.com/v2/resize:fit:1400/1*i2H_gPhtesWqlb8BLt1f2Q.jpeg");

//Task 8
// removing CSS class
let box2 = document.querySelector("#box2")
box2.classList.remove("box")

// adding style/ css Class to the div we added in task 3
newDiv.classList.add("box")

// --------------------------> Activity 5 <--------------------------------
// Task 9
let articleEditBtn = document.getElementById("btnEdit")
articleEditBtn.addEventListener("click", () => {
    let text = prompt("Change the text");
    document.querySelector("p").innerText = text;
}
)

// Task 10
// hover
let image = document.querySelector(".images");
image.addEventListener("mouseover", () => {
    image.style.borderColor = "red";
}
)

// de hover
image.addEventListener("mouseout", () => {
    image.style.borderColor = "white";
}
)