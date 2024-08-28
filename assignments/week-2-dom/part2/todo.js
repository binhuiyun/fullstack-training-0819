function AddTodo() {
  let input_text = document.getElementById("input_text").value;
  let todos = document.getElementById("todos");

  if (input_text.trim() !== "") {
    let todoItem = document.createElement("li");
      todoItem.innerHTML = `
            <div class=todoContent>
                <input type="checkbox"/>
                <div id="inputVal">${input_text}</div>
            </div>
            <div class="btns">
                <button class="btn edit_btn" onClick="editTodo(event)">Edit</button>
                <button class="btn delete_btn" onClick="deleteTodo(event)">Delete</button>
            </div>
        `;
    todos.appendChild(todoItem);
    input_text = "";
  }
}

function editTodo(event) {
  let inputVal = event.target.closest("li").querySelector("#inputVal");
  let newInputVal = prompt("Edit your task", inputVal.textContent);

  if (newInputVal && newInputVal.trim() !== "") {
    inputVal.textContent = newInputVal.trim();
  }
}

function deleteTodo(event) {
  let todoItem = event.target.closest("li");
  todoItem.remove();
}
