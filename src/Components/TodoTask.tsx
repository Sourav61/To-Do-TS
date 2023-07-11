import React from 'react'
import { ITask } from '../Interfaces'
import '../App.css'
interface Props {
    task: ITask;
    completeTask(taskNameToDelete: string): void
}

const TodoTask = ({ task, completeTask }: Props) => {
    console.log(task);
    return (
        <div className='task'>
            <div className="content">
                <span className="taskName">{task.taskName}</span>
                <span className="deadline">{task.deadline}</span>
            </div>
            <button onClick={() => completeTask(task.taskName)}>X</button>
        </div>
    )
}

export default TodoTask