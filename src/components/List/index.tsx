import React, { useState } from "react";
import Item from "./Item";
import style from './List.module.scss'

function List() {
  const [tasks, setTasks] = useState([
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "Javascript",
      time: "01:00:00",
    },
    {
      task: "Typescript",
      time: "03:00:00",
    },
  ]) 
  return (
    <aside className={style.listaTarefas}>
      <h2 onClick={() => {
        console.log('clicou', tasks)
        setTasks([...tasks, {task: 'Github', time: '03:30:00'}]) 
      }}>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <Item key={index} {...task} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
