
export class Todo {
    static fromJson({tarea,id,creado,completado}){
        const newTodo = new Todo(tarea);
        newTodo.id = id;
        newTodo.creado = creado;
        newTodo.completado = completado;
        return newTodo;        
    }

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.creado = new Date();
        this.completado = false;
    }
   imprimeDatos(){
        console.log(`tarea: ${this.tarea} - id: ${this.id}`);
    }
}