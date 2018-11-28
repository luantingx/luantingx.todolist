var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = Array.from(document.querySelectorAll("li"));
var deleteBtn = Array.from(document.querySelectorAll(".dltbtn"));


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var addButton = li.appendChild(document.createElement("button"));
	addButton.appendChild(document.createTextNode("Delete"));
	ul.appendChild(li);
	setUpListeners(li, addButton);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleItem(event){
	// console.log(item === event.target);
	// console.log(event.target);
	event.target.classList.toggle("done");    //event.target is a DOM element!!!
}

function addToggleItem(item) {
	item.addEventListener("click", toggleItem);	
}

function deleteRow(event) {
	ul.removeChild(event.target.parentNode);
}


function addDeleteRow(btn) {
	btn.addEventListener("click", deleteRow);	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

items.forEach(addToggleItem);

deleteBtn.forEach(addDeleteRow);


function setUpListeners(li, addButton) {
	addToggleItem(li);
	addDeleteRow(addButton);
}


// 1.addEventListener to each item
// 2.in the callback, need to identify the item
// 3.toggle the done class to the specific item