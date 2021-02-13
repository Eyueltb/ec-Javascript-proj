const todoItems=document.getElementById('todo-items');
const todoForm=document.getElementById('todo-form');
const todoItem=document.getElementById('todo-list-item');

if(localStorage.TodoItems!=null)
    todoItems.innerHTML=localStorage.TodoItems;

todoForm.onsubmit= ( event )=>{
    event.preventDefault();
    //console.log('Form submitted', event);
    let item=todoItem.value;
    if(item){
        todoItems.innerHTML +=`<li> <input type="checkbox"/> ${item} <a class="remove">x</a> <hr></li>`;
        todoItem.value='';
        localStorage.TodoItems=todoItems.innerHTML;
    }
}
todoItems.onchange=(event)=>{
    if(event.target.type=='checkbox'){
        if(event.target.hasAttribute('checked'))
            event.target.removeAttribute('checked')
        else
            event.target.setAttribute('checked','checked')
        
        event.target.parentElement.classList.toggle('completed');
        localStorage.TodoItems=todoItems.innerHTML;
    }
   
}
todoItems.onclick=(event)=>{
    const hasRemoveClass=event.target.classList.contains('remove');
    if(hasRemoveClass)
    {
       let li=event.target.parentElement;
       todoItems.removeChild(li);
       localStorage.TodoItems=todoItems.innerHTML;
    }
}