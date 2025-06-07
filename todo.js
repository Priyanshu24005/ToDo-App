let todoList = [];
let btn = document.querySelector(".btn-add")
displayItems();

function addTask() {
    let inputElement = document.querySelector('#todoItem');
    let DateElement = document.querySelector('#date');
    let todoItem = inputElement.value;
    let todoDate = DateElement.value;
    todoList.push({ item: todoItem, duedate: todoDate });
    inputElement.value = '';
    DateElement.value = '';

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('#todo-contatiner');
    let newHTML = '';
    
    for (let i = 0; i < todoList.length; i++) {
        let todoItem = todoList[i].item;
        let todoDate = todoList[i].duedate;
        newHTML += `
                <span>${todoItem}</span>
                <span>${todoDate}</span>
                <button class="btn-delete" data-index="${i}">Delete</button>
        `;
    }

        containerElement.innerHTML = newHTML;

    let deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            let index = button.getAttribute('data-index'); 
            todoList.splice(index, 1);  
            displayItems();  
        });
    });
    


    
}


btn.addEventListener("click",addTask)
