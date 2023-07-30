
const todo_display = document.getElementById("todo-container") 
const newTodo = document.getElementById("new_todo")
const delete_btn = document.querySelector(".delete")
const btn = document.getElementById("add_new_todo")
const enter_search = document.getElementById("search")
const searchInput = document.getElementById("search_input")



//Add new Task
btn.addEventListener("click",()=>{
   if(newTodo.value === ""){
      alert("please enter some text")
   }else{
       const div= document.createElement('div');
        div.className = "todo";
        div.innerHTML = `<i class="far fa-square done-icon"></i>
                         <i class="far fa-check-square done-icon"></i>
                         <span class="todo-text">${newTodo.value}</span>
                        <i class="fa-solid fa-trash"></i>`
                                       
       todo_display.appendChild(div); 
                   
        newTodo.value = ""                
      }
      
   })

//<i class="fa-solid fa-edit fa-md"></i>


//delete a todo and complete a todo

todo_display.addEventListener("click",removeTodo)

function removeTodo(e) {
   // Remove todo
   console.log("clicked")
   if (e.target.classList.contains('fa-trash')) {
       if (confirm('Are you sure')) {
           e.target.parentElement.remove();
       }
   }
   //completed a todo
    if (e.target.classList.contains('todo-text')) {
       e.target.parentElement.classList.toggle('done');
    }
    if (e.target.classList.contains('done-icon')) {
       e.target.parentElement.classList.toggle('done');
  }
}


//search todo
enter_search.addEventListener("click", searchTodo)
   function searchTodo(e) {
      const text = searchInput.value.toLowerCase();
      const allItem = document.querySelectorAll('.todo');
      for (let task of allItem) {
          const item = task.textContent;
          if (item.toLowerCase().indexOf(text) != -1) {
              task.style.display = 'flex';
          } else {
              task.style.display = 'none';
          }
      };
  }

 
 
   








