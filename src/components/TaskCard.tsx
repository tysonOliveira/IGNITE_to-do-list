import { Check, Trash } from 'phosphor-react';

import style from './TaskCard.module.css';

interface TaskProps {
  text: string;
  onDeleteTask: (task: string) => void;
}

export function TaskCard({text, onDeleteTask}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(text);
  } 
  
  return (
    <div className={style.taskCard}>
      <div className={style.container} >
        <input type="checkbox" />
        <span className={style.check} ></span>
      </div>

      <p >{text}</p>
      <button onClick={handleDeleteTask} title='Deletar tarefa' > <Trash size={20} /></button>
    </div>
  )
}
