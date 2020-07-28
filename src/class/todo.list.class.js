import { Todo } from '../class/todo.class';

export class TodoList {

    constructor(){
        //this.todos = [];
        this.getLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.setLocalStorage();
    }

    eliminarTarea(id){
        this.todos = this.todos.filter(todo => todo.id != id);
        this.setLocalStorage();
    }

    marcarCompletado(id){
        for (const tarea of this.todos) {
            console.log(id, tarea.id);
            if (tarea.id == id) {
                tarea.completado = !tarea.completado;
                this.setLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
       this.todos = this.todos.filter(todo => !todo.completado);
       this.setLocalStorage();
    }

    setLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    getLocalStorage(){
       this.todos =  (localStorage.getItem('todo'))? JSON.parse(localStorage.getItem('todo')) :  [];
       this.todos = this.todos.map(obj => Todo.fromJson(obj));

        

    }
}