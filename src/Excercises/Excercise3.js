import React, { useState } from 'react';

function Excercise3() {
  const data = [
    {
      id: 1,
      description: 'shoping',
    },
  ];

  const [tasks, setTasks] = useState(data);
  const [todo, setTodo] = useState('');

  const addTask = () => setTasks([...tasks, { id: tasks.length+1,description: todo }]);

  const deleteTask = (id) => {
    let newTask = tasks.filter((task) => task.id != id);
    setTasks(newTask);
  };

  return (
    <>
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => addTask(todo)}>Add todo</button>
      <div>
        {tasks.map((task) => {
          const { id, description } = task;
          return (
            <div key={id}>
              <h2>{description}</h2>
              <button onClick={() => deleteTask(id)}> Delete todo</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Excercise3;
