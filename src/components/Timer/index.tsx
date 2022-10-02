import { useEffect, useState } from "react";
import { timeForSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface ITimerProps {
  selectedTask?: ITask | undefined;
}

export default function Timer({ selectedTask }: ITimerProps) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selectedTask) {
      setTime(timeForSeconds(selectedTask.time));
    }
  }, [selectedTask]);

   
  return (
    <div className={style.timer}> 
      <p className={style.title}>Escolha um card e inicie o cronometro</p>

      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button>Começar!</Button>
    </div>
  );
} 
