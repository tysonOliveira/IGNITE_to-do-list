import { Trash } from 'phosphor-react';

import style from './TaskCard.module.css';

interface N {
  text: string;
}

export function TaskCard(item: N) {
  return (
    <div className={style.taskCard}>
      <input type="checkbox" checked />
      <p>{item.text}</p>
      <a> <Trash size={25} /></a>
    </div>
  )
}