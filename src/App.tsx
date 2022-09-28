import { Header } from './components/Header';
import { AddTask } from './components/AddTask';

import './global.css';

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <AddTask />
      </main>
    </div>
  )
}