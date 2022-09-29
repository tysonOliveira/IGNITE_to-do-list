import { Check, Trash } from 'phosphor-react';

import style from './TaskCard.module.css';

interface N {
  text: string;
}
const m = '';

export function TaskCard(item: N) {
  return (
    <div className={style.taskCard}>
      <div className={style.container} >
        <input type="checkbox" />
        <span className={style.check}><Check/></span>
      </div>

      <p >{item.text}</p>
      <a> <Trash size={25} /></a>
    </div>
  )
}
