import './styles.css';

 import{TodoList,Todo} from './class';
import { crearTodoHTML } from './js/componentes';


export const todoList = new TodoList();
console.log(todoList.todos);
todoList.todos.forEach(element => {
    crearTodoHTML(element);
});
todoList.todos[0].imprimeDatos();
