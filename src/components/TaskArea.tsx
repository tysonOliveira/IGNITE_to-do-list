import style from './TaskArea.module.css';
import Clipboard from '../assets/Clipboard.svg';

export function TaskArea() {
  return (
    <div className={style.taskArea}>
      <img src={Clipboard} alt="clipboard" />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}