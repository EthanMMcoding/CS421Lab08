import React, { useState } from 'react'

const TodoList = () => {
  // Define state for tasks and new task input
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== ''){
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask('');
    };
  };

  // Handle task completion toggle
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
        i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleEditing = (index) => {
    setIsEditing(index);
    setEditText(tasks[index].text);
  };

  const handleEditInputChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditFormSubmit = (e, index) => {
    e.preventDefault();
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: editText } : task
    );
    setTasks(updatedTasks);
    setIsEditing(null);
  };

  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return(
  <div>
    <h1>
        To-Do List
    </h1>
    <form onSubmit={handleFormSubmit}>
        <input 
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder='Enter a new task'
        />
        <button type='submit'>Add Task</button>
    </form>
    <ul>
    {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {isEditing === index ? (
              <form onSubmit={(e) => handleEditFormSubmit(e, index)}>
                <input
                  type="text"
                  value={editText}
                  onChange={handleEditInputChange}
                />
                <button type="submit">Save</button>
              </form>
            ) : (
              <>
                <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
                <button onClick={() => handleEditing(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </>
            )}
        </li>
    ))}        
    </ul>
  </div>
  );
};
export default TodoList;
