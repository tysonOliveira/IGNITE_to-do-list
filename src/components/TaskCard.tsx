import { Check, Trash } from 'phosphor-react';
import { ChangeEvent, DetailedHTMLProps, useState } from 'react';
import style from './TaskCard.module.css';

interface TaskProps {
  text: string;
  onDeleteTask: (task: string) => void;
  checkboxChecked?: (check: boolean) => void
  onTasksChecked: () => void
}

export function TaskCard({ text, onDeleteTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);
  
  /* Em typescript é necessário passarmos como parâmetro não só o 'event', mas
  também o tipo de evento 'ChangeEvent' e qual o elemento HTML 'HTMLInputElement' */ 
  function checkboxChecked(event: ChangeEvent<HTMLInputElement>) {
    // Se o input checkbox estiver checked, muda o estado para true
    event.target.checked && setIsChecked(true);  
  }

  function handleCountTasksChecked() {
    console.log('checked');
  }

  function handleDeleteTask() {
    /* Passa para a função o texto que queremos excluir. Esta função é executada
    no componente pai 'AddTask' */
    onDeleteTask(text);
  }

  return (
    <div className={style.taskCard}>
      <div className={style.container} >
        <input type="checkbox" onChange={checkboxChecked} onClick={handleCountTasksChecked} />
        <span className={style.check} ></span>
      </div>

      <p>{text}</p>
      <button onClick={handleDeleteTask} title='Deletar tarefa' > <Trash size={20} /></button>
    </div>
  )
}
