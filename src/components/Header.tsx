import style from './Header.module.css';

import icon from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={style.title}>
      <img src={icon} alt="page title" />
      <h1> to<span>do</span></h1>
    </header>
  )
}