import { PlusCircle } from 'phosphor-react';

import style from './AddTask.module.css';

export function AddTask() {
  return (
    <div >
      <section className={style.task}>
        <input className={style.taskName} type="text" placeholder="Adicione uma nova tarefa" />
        <button className={style.createTaskButton}>Criar <PlusCircle size={20} weight="bold"/></button>
      </section>

      <section>
        <header>
          <span>Tarefas criadas</span>
          <span>Concluídas</span>
        </header>

      </section>
    </div>
  )
}