import { PlusCircle } from 'phosphor-react';

import style from './AddTask.module.css';

export function AddTask() {
  return (
    <div>
      <section className={style.task}>
        <input className={style.taskName} type="text" placeholder="Adicione uma nova tarefa" />
        <button className={style.createTaskButton}>Criar <PlusCircle size={20} weight="bold"/></button>
      </section>

      <section className={style.taskInfo}>
        <header className={style.taskInfoHeader}>
          <span className={style.createdTask}>Tarefas criadas <span className={style.info}>0</span></span>
          <span>Concluídas <span className={style.info}>0</span></span>
        </header>

      </section>
    </div>
  )
}