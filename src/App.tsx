import React, { useState, ChangeEvent, FC } from 'react'
import './App.css'
import { ITask } from './Interfaces'
import TodoTask from './Components/TodoTask'

const App: FC = () => {
  const [Task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e?.target?.name === 'task') {
      setTask(e?.target?.value);
    } else {
      setDeadline(Number(e?.target?.value));
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: Task, deadline: deadline }
    setTodoList([...todoList, newTask]);
    // console.log(todoList);
    setTask("")
    setDeadline(0)
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter(task => {
      return task.taskName != taskNameToDelete
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task...."
            name="task"
            onChange={handleChange}
            value={Task}
          />
          <input
            type="number"
            placeholder="Deadline(in Days)...."
            name="deadline"
            onChange={handleChange}
            value={deadline}
          />
        </div>
        <button className="submitBtn" onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList?.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />
        })}
      </div>
    </div>
  )
}

export default App
