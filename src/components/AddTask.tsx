import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

import style from './AddTask.module.css';

import { TaskArea } from './TaskArea';
import { TaskCard } from './TaskCard';

export function AddTask() {
  const [taskText, setTaskText] = useState<string[]>([]);

  const [newTaskText, setNewTaskText] = useState('');


  function handleNewTaskText(event: FormEvent) {
    event.preventDefault();
    
    setTaskText([...taskText, newTaskText]);
    setNewTaskText('');
    console.log(newTaskText);
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const deletarTarefa = taskText.filter(task => {
      return task !== taskToDelete;
    })

    setTaskText(deletarTarefa);
  }

  return (
    <div>
      <section className={style.task}>
        <form onSubmit={handleNewTaskText}>
          <input 
            className={style.taskName} 
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            onChange={handleNewTaskTextChange} 
          />

          <button 
            type="submit" 
            className={style.createTaskButton}
          >
              Criar <PlusCircle size={20} weight="bold" />
          </button>
        </form>
      </section>

      <section className={style.taskInfo}>
        <header className={style.taskInfoHeader}>
          <span className={style.createdTask}>
            Tarefas criadas 
            <span className={style.info}>{taskText.length}</span>
          </span>
          <span>Concluídas <span className={style.info}>2 de {taskText.length}</span></span>
        </header>

        {taskText.length ? taskText.map(item => <TaskCard text={item} onDeleteTask={deleteTask} />) : <TaskArea/>}

      </section>
    </div>
  )
}