import { NextPage } from 'next';
import TodoAdd from '../components/todo/TodoAdd';
import TodoList from '../components/todo/TodoList';

const Todo: NextPage = () => {

  return (<div className='container'>
    <div className='list-box'>
      <TodoAdd /> <hr /><TodoList />
    </div>
  </div>);
}

export default Todo;