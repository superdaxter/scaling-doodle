import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true)

  const func = () => {
    console.log("abc")
  }

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Checkup',
      name: 'Jo',
      reminder: true,
    },
    {
      id: 2,
      text: 'Purchase',
      name: 'Bob',
      reminder: false,
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = tasks.length + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Important/Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} onCheck={func} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
