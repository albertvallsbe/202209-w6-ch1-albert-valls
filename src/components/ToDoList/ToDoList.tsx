import { useAppSelector } from "../../app/hooks";
import ToDoListStyled from "./ToDoListStyled";

const ToDoList = () => {
  const list = useAppSelector((state) => state.toDo.list);

  return (
    <>
      <ToDoListStyled>
        <header>
          <h1>To Do List Tasks</h1>
        </header>
        <main>
          {list.map(({ id, name, done }, index) => (
            <ToDoCard key={index} id={id} name={name} done={done} />
          ))}
        </main>
      </ToDoListStyled>
    </>
  );
};
