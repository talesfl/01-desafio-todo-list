import styles from './Task.module.css'

import { Trash } from 'phosphor-react'

import { Checkbox } from './Checkbox'
import { useState } from 'react'

export interface TaskType {
  id: string
  done: boolean
  description: string
}

interface TaskProps {
  task: TaskType,
  onDelete: (taskId: string) => void,
  onChange: (task: TaskType) => void
}

export function Task({ task, onDelete, onChange }: TaskProps) {
  const [taskState, setTaskState] = useState(task)

  function handleTaskChange(done: boolean) {
    const newTask = { ...taskState, done }
    setTaskState(newTask)
    onChange(newTask)
  }

  function handleDeleteClick() {
    onDelete(taskState.id)
  }

  return (
    <div className={styles.taskWrapper}>

      <Checkbox onValueChange={handleTaskChange} />

      <p className={taskState.done ? styles.taskTextDone : styles.taskText}>
        {taskState.description}
      </p>

      <button onClick={handleDeleteClick} className={styles.trashButton}>
        <Trash size={20} />
      </button>

    </div>
  )
}