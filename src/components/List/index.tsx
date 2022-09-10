import { ITask } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface IListProps {
  tasks: ITask[];
  selectTask: (task: ITask) => void;
}

function List({ tasks, selectTask }: IListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item key={task.id} selectTask={selectTask} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
