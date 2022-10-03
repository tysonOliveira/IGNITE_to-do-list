import { Check, Trash } from 'phosphor-react';
import { ChangeEvent, DetailedHTMLProps, useState } from 'react';
import style from './TaskCard.module.css';

interface TaskProps {
  text: string;
  onDeleteTask: (task: string) => void;
  onCountTasks: (checkbox: boolean) => void
}

export function TaskCard({ text, onDeleteTask, onCountTasks }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleIsChecked(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setIsChecked(true);
      onCountTasks(true);
    } else {
      setIsChecked(false);
      onCountTasks(false);
    }
  }

  function handleDeleteTask() {
    /* Passa para a função o texto que queremos excluir. Esta função é executada
    no componente pai 'AddTask' */
    onDeleteTask(text);
  }

  return (
    <div className={style.taskCard}>
      <div className={style.container} >
        <input type="checkbox" onChange={handleIsChecked} />
        <span className={style.check} ></span>
      </div>

      <p className={isChecked ? style.checkbox1 : style.checkbox2} >{text}</p>
      <button onClick={handleDeleteTask} title='Deletar tarefa' > <Trash size={20} /></button>
    </div>
  )
}