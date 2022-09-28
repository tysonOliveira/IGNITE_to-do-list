import style from './AddTask.module.css';

export function AddTask() {
  return (
    <div >
      <section className={style.task}>
        <input className={style.taskName} type="text" placeholder="Adicione uma nova tarefa" />
        <button className={style.createTaskButton}>Criar</button>
      </section>
      <section>

      </section>
    </div>
  )
}