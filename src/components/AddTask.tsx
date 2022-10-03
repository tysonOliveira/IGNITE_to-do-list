import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import style from './AddTask.module.css';

import { TaskArea } from './TaskArea';
import { TaskCard } from './TaskCard';

export function AddTask() {
  const [taskText, setTaskText] = useState<string[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [countTasksChecked, setCountTasksChecked] = useState(0);

  function handleNewTaskText(event: FormEvent) {
    // Retira o comportamento padrão da tag form de aprir outra página ao enviar o formulário (submit).
    event.preventDefault();
    
    setTaskText([...taskText, newTaskText]);

    // Limpa o input após criar uma tarefa
    setNewTaskText('');  
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTaskText(event.target.value);
  }

  // Exibe uma mensagem caso tente enviar o formulário sem um texto no input.
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    // Mensagem a ser exibida
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  // Deleta a tarefa passada como parâmetro pelo componente filho "TaskCard".
  function deleteTask(taskToDelete: string) {

    // Cria um novo array sem a task passada como parâmetro.
    const newTaskTextArray = taskText.filter(task => {
      return task !== taskToDelete;
    }) 
    // Adiciona o novo array em setTaskText.
    setTaskText(newTaskTextArray);
  }

  function countTasks(checked: boolean) {
    checked ? setCountTasksChecked(item => item + 1) : setCountTasksChecked(item => item - 1)
  }

  return (
    <div>
      <section className={style.task}>
        <form onSubmit={handleNewTaskText}>
          <input 
            className={style.taskName} 
            type="text" 
            placeholder="Adicione uma nova tarefa" 
            value={newTaskText}   // Adiciona a variável 'newTaskText' para limpar o input.
            onChange={handleNewTaskTextChange} 
            onInvalid={handleNewTaskInvalid}  
            required
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
          <span>Concluídas <span className={style.info}>{countTasksChecked} de {taskText.length}</span></span>
        </header>

        {/* Testa se existe algum texto em taskText, se existir percorre o taskText usando o map, se não mostra '<TaskArea/>' */}
        {taskText.length ? taskText.map(item => 
          // Envia a função deleteTask para o componente filho.
          <TaskCard key={item} text={item} onDeleteTask={deleteTask} onCountTasks={countTasks}  />
        ) : <TaskArea/>}

      </section>
    </div>
  )
}
