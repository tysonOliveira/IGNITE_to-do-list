import { PlusCircle } from 'phosphor-react';

import style from './AddTask.module.css';

import { TaskArea } from './TaskArea';
import { TaskCard } from './TaskCard';

interface S {
  text: string;
}

export function AddTask(props: S) {
  const taskNumbers = 0;
  const sum = [{
    text: 'thaison reis de oliveira',
  },{
    text: 'thaison reis de oliveira'
  },{
    text: 'thaison reis de oliveira'
  },{
    text: 'thaison reis de oliveira'
  },{
    text: 'thaison reis de oliveira'
  }];
  

  return (
    <div>
      <section className={style.task}>
        <input className={style.taskName} type="text" placeholder="Adicione uma nova tarefa" />
        <button className={style.createTaskButton}>Criar <PlusCircle size={20} weight="bold" /></button>
      </section>

      <section className={style.taskInfo}>
        <header className={style.taskInfoHeader}>
          <span className={style.createdTask}>Tarefas criadas <span className={style.info}>{taskNumbers}</span></span>
          <span>Concluídas <span className={style.info}>2 de {taskNumbers}</span></span>
        </header>

        {sum.map(item => {
          return (
            item ? <TaskCard text={item.text} /> : <TaskArea />
          )
        })}

      </section>
    </div>
  )
}