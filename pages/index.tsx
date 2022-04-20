import { NextPage } from 'next';
import Todoadd from './todo/Todoadd';
import Todolist from './todo/Todolist';

const Todo: NextPage = () => {

  return (<div className='container'>
    <div className='list-box'>
      <Todoadd /> <hr /><Todolist />
    </div>
  </div>);
}

export default Todo;