export interface ToDo {
  id: number;
  name: string;
  done: boolean;
}

export interface ToDoList {
  list: ToDo[];
}
