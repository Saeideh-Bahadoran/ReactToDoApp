
import tasksData from '../tasks.json';
import { useState } from 'react';
import ListItem from './ListItem';

const TasksList = () => {
  const [tasks, setTasks] = useState(tasksData)

  function removeItem(item) {
    setTasks(() => tasks.filter((i) => i.task !== item.task))
  }

  return (
    <>

      <ul>
        {tasks.map(item =>
          <div key={item.task}>
            <ListItem currentTask={item} remove={(item)=>removeItem(item)}/>
            
          </div>

        )}
      </ul>

    </>

  );
};
export default TasksList;
