
const todo_display = document.getElementById("todo-container") 
const newTodo = document.getElementById("new_todo")
const delete_btn = document.querySelector(".delete")
const allTodo = document.querySelectorAll(".todo")
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
                         <input class="todo-text" value=${newTodo.value} style="border: none" readonly/>
                         <i class="edit">Edit</i/>
                         <i class="fa-solid fa-trash"></i>`
                                       
       todo_display.appendChild(div); 
                   
        newTodo.value = ""                
      }}
      
   )



//delete a todo and complete a todo

todo_display.addEventListener("click",actions)

function actions(e) {
   // Remove todo
   console.log("clicked")
   if (e.target.classList.contains('fa-trash')) {
       if (confirm('Are you sure')) {
           e.target.parentElement.remove();
       }
   }
   //completed a todo
    if (e.target.classList.contains('done-icon')) {
       e.target.parentElement.classList.toggle('done');
  }
  //edit a todo
  if(e.target.classList.contains("edit")){
      if(e.target.innerText == "Edit"){
        const sibling = e.target.previousElementSibling
        sibling.removeAttribute("readonly");
        sibling.focus();
         e.target.innerText = "Save";
         sibling.style.textDecoration="none"}
     else{
        e.target.previousElementSibling.setAttribute("readonly", "readonly");
        e.target.innerText ="Edit";
     }    
}

  }



//search todo
enter_search.addEventListener("click", searchTodo)
   function searchTodo() {
      const text = searchInput.value.toLowerCase();
      const alltodoText = document.querySelectorAll('.todo-text');
      const todos = document.querySelectorAll(".todo")
      console.log(alltodoText)
          for(let task of alltodoText){
            const item = task.value
            if(item.toLowerCase().indexOf(text) != -1){
                task.parentElement.style.display = "flex"
            }else{
                task.parentElement.style.display = "none"
            }
          }
    
      };



 
 
   








