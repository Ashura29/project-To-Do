import { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || '';
  });
  
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const completeTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
    
    setTimeout(() => {
      setTasks(tasks.filter(task => task.id !== taskId));
    }, 500);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">SYSTEM v1.0</h1>
        <h2 className="title">WELCOME {userName || 'NETRUNNER'}</h2>
      </header>

      <div className="input-group">
        <label className="label">IDENTIFY USER:</label>
        <input
          type="text"
          className="input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your handle..."
        />
      </div>

      <form onSubmit={addTask} className="input-group">
        <label className="label">NEW TASK:</label>
        <div className="task-input">
          <input
            type="text"
            className="input"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add new objective..."
          />
          <button
            type="submit"
            className="button"
            disabled={!newTask.trim()}
          >
            ADD TASK
          </button>
        </div>
      </form>

      <div>
        <h3 className="title">ACTIVE TASKS [{tasks.length}]</h3>
        {tasks.length === 0 ? (
          <p>No active tasks. Add some objectives.</p>
        ) : (
          <ul className="task-list">
            {tasks.map(task => (
              <li key={task.id} className="task-item">
                <span>{task.text}</span>
                <div className="task-controls">
                  <button
                    onClick={() => completeTask(task.id)}
                    className="task-button"
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="task-button delete-button"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;