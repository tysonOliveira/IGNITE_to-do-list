import { Check, Trash } from 'phosphor-react';
import { ChangeEvent, DetailedHTMLProps, useState } from 'react';
import style from './TaskCard.module.css';

interface TaskProps {
  text: string;
  onDeleteTask: (task: string) => void;
  checkboxChecked?: (check: boolean) => void
}

export function TaskCard({ text, onDeleteTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);
  

  function checkboxChecked(event: ChangeEvent<HTMLInputElement>) {
    event.target.checked && setIsChecked(true);
  }

  function handleDeleteTask() {
    onDeleteTask(text);
  }

  return (
    <div className={style.taskCard}>
      <div className={style.container} >
        <input type="checkbox" onChange={checkboxChecked} />
        <span className={style.check} ></span>
      </div>

      <p>{text}</p>
      <button onClick={handleDeleteTask} title='Deletar tarefa' > <Trash size={20} /></button>
    </div>
  )
}
