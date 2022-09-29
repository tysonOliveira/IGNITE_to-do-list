import { PlusCircle } from 'phosphor-react';

import style from './AddTask.module.css';

import { TaskArea } from './TaskArea';
import { TaskCard } from './TaskCard';

export function AddTask() {
  const taskNumbers = 0;
  const sum = [{
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia enim doloremque omnis totam soluta voluptates eligendi quos amet quam rerum',
  },{
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia enim doloremque omnis totam soluta voluptates eligendi quos amet quam rerum'
  },{
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia enim doloremque omnis totam soluta voluptates eligendi quos amet quam rerum'
  },{
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia enim doloremque omnis totam soluta voluptates eligendi quos amet quam rerum'
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