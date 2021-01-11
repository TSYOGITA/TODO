let inputFeild = document.getElementById('inputFeild');
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputFeild.value;
    toDoContainer.appendChild(paragraph);
    inputFeild.value = "";
    paragraph.addEventListener('click',function() {
        paragraph.style.textDecorationLine = 'line-through';
    })
    paragraph.addEventListener('dblclick',function() {
        toDoContainer.removeChild(paragraph);
    })
})