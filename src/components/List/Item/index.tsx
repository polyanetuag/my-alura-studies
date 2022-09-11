import { ITask } from "../../../types/task";
import style from "../List.module.scss";

interface IItemProps extends ITask {
  selectTask: (task: ITask) => void;
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectTask,
}: IItemProps) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelecionado : ""} `}
      onClick={() =>
        selectTask({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
