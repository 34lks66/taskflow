import './ToDo.css';
import Hero from './components/Hero';
import Form from './components/Form';
import TaskBoard from './components/TaskBoard'

export default function ToDo() {
  return (
    <div>
      <Hero />
      <Form />
      <TaskBoard />
    </div>
  );
}
