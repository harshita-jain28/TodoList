const addForm = document.querySelector('.add');
const list = document.querySelector('.todo');
const search = document.querySelector('.search input');
const generateTemplate = todos =>{
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todos}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
    //window.localStorage.setItem('user',JSON.stringify(list));

};
addForm.addEventListener('submit', fun =>{
    fun.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
    generateTemplate(todo);
    addForm.reset();
    }
});

list.addEventListener('click',fun =>{
    if(fun.target.classList.contains('delete')){
        fun.target.parentElement.remove();
    }
});
const filterTodos = (term) =>{
    Array.from(list.children)
     .filter((todo)=> !todo.textContent.includes(term))
     .forEach((todo) => todo.classList.add('filtered'));
     Array.from(list.children)
     .filter((todo)=> todo.textContent.includes(term))
     .forEach((todo) => todo.classList.add('filtered'));
    
};
search.addEventListener('keyup', ()=>{
    const term = search.value.trim();
    filterTodos(term);

});
//window.addEventListener('load',()=>{
    //JSON.parse(window.localStorage.getItem('user'));

//});