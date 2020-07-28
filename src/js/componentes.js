import { Todo } from "../class";

import {todoList} from '../index'

const listHTML = document.querySelector('.todo-list');
const inputTarea = document.querySelector('.new-todo');
const buttonClearComp = document.querySelector('.clear-completed');
const filtersOptions = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHTML = (todo) => {
    const textHtlm = `<li class="${(todo.completado)? 'completed' : ''}" data-id="${todo.id}">
<div class="view">
    <input class="toggle" type="checkbox" ${(todo.completado)? 'checked' : ''}>
    <label>${todo.tarea}</label>
    <button class="destroy"></button>
</div>
<input class="edit" value="Create a TodoMVC template">
</li> `;

const div = document.createElement('div');

div.innerHTML = textHtlm;

listHTML.append(div.firstElementChild);

return div;

}

//eventos

inputTarea.addEventListener('keyup',(event)=>{
    if(event.keyCode === 13 && inputTarea.value.length > 0){
        
        todoList.nuevoTodo(new Todo(inputTarea.value));     
        console.log(todoList);
        crearTodoHTML(new Todo(inputTarea.value));
        inputTarea.value = '';
        //crearTodoHTML(new Todo(inputTarea.value));
    }

});

listHTML.addEventListener('click',(event)=>{
    const tipoElemento = event.target.localName;
    const itemLista = event.target.parentElement.parentElement;
    const idItem = itemLista.getAttribute('data-id');
    //console.log(tipoElemento);
    //console.log(itemLista);
    //console.log(idItem);
    if(tipoElemento.includes('input')){
        todoList.marcarCompletado(idItem);
        itemLista.classList.toggle('completed');
    
       
    }else if(tipoElemento.includes('button')){
        todoList.eliminarTarea(idItem);
        listHTML.removeChild(itemLista);
    
    }
   });
buttonClearComp.addEventListener('click',(event)=>{
    todoList.eliminarCompletados();
    for(let i = listHTML.children.length-1;i >= 0; i--){
        if(listHTML.children[i].classList.contains('completed')){
            listHTML.removeChild(listHTML.children[i]);
        }
    }
});
filtersOptions.addEventListener('click',(event)=>{
    const filtro = event.target.text;
    const items = listHTML.children;
    if(!filtro){return;};
    anchorFiltros.forEach(elemento => {
        elemento.classList.remove('selected');
    });
    event.target.classList.add('selected');
    for(const elemento of items){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        switch(filtro){
          
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
                break;
                case 'Completados':
                        if(!completado){
                            elemento.classList.add('hidden');
                        }
                    break;
        };

    }

    

});