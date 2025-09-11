let todooluştur = document.querySelector(".todo_oluşturma");
let todogir = document.querySelector("#todogir");
let todogönder = document.querySelector("#todogönder");
let todolar = document.querySelector("#todolar");
let todoform = document.querySelector("#todoform");
let todolarıTemizle = document.querySelector("#todolarıTemizle");

let todos = [];
runevents();

function runevents(){
    todoform.addEventListener("submit",addtodo);
    document.addEventListener("DOMContentLoaded", load);
    todolar.addEventListener("click",todosilUI);
    todolarıTemizle.addEventListener("click",tümtodosil);
}

function load(){
    checktodosfromstorge()
    todos.forEach(function(todo){
        addTodoTUI(todo);
    });
}
function addtodo(e){
    const input_text = todogir.value.trim();
    if(input_text==null || input_text == ""){
        alert("lütfen burayı doldurun");
    }else{
        addTodoTUI(input_text);
        addTodoStorge(input_text);
    }
    e.preventDefault();
   
}
function todosilUI(e){
    if(e.target.className === "fa-solid fa-trash"){
        const todo = e.target.parentElement.parentElement;
        todo.remove();
        //storgeden silme
        removeTodoStorge(todo.textContent);

    }
}
function removeTodoStorge(removetodo){
    checktodosfromstorge();
    todos.forEach(function(todo,index){
        if(removetodo === todo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}
function tümtodosil(){
    const todolist = document.querySelectorAll(".liGurupClassName");

    if(todolist.length>0){
        todolar.innerHTML = "";
        localStorage.removeItem("todos");
        todos = [];
    }else{
        alert("ilk önce todo tanımlayın!")
    }
  
}
function addTodoTUI(newTodo){
//     <li>selam
//     <a href="#" id="delete_buton">
//          <i class="fa-solid fa-trash"></i>
//     </a>
// </li>
let li = document.createElement("li");
li.textContent = newTodo;
li.className = "liGurupClassName"
let a = document.createElement("a");
a.href = "#";
a.id = "delete_buton";
let i = document.createElement("i");
i.className = "fa-solid fa-trash"

todolar.appendChild(li);
li.appendChild(a);
a.appendChild(i);

todogir.value = " ";

}
function addTodoStorge(newTodo){
   checktodosfromstorge();
   todos.push(newTodo);
   localStorage.setItem("todos",JSON.stringify(todos))
    
}
function checktodosfromstorge(){
    if(localStorage.getItem("todos")===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }  
}


