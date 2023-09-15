import styles from './App.module.css'

import { Header } from './components/Header'
import { NewTaskForm } from './components/NewTaskForm'
import { TasksInfo } from './components/TasksInfo'
import { Task, TaskType } from './components/Task'

import { useState } from 'react'
import { EmptyTasks } from './components/EmptyTasks'

export function App() {
  const [taskList, setTaskList] = useState([] as TaskType[])

  function handleOnDelete(taskId: string) {
    setTaskList(taskList.filter(task => task.id !== taskId))
  }

  function handleOnChange(next: TaskType) {
    const newTaskList = taskList.slice()

    const index = newTaskList.findIndex(task => task.id === next.id)
    newTaskList.splice(index, 1, next)

    setTaskList([...newTaskList])
  }

  function handleOnCreate(next: TaskType) {
    setTaskList([...taskList, next])
  }

  const taskListRender = (
    <div className={styles.taskListWrapper}>
      {
        taskList.map(task => { return (
            <Task 
              key={task.id} 
              task={task} 
              onDelete={handleOnDelete} 
              onChange={handleOnChange} 
            />
          )})
      }
    </div>
  )

  const totalTaskDone = taskList.reduce((totalDone, task) => totalDone + (task.done ? 1 : 0), 0)

  return (
    <>
      <Header />

      <main className={styles.contentWrapper}>
        <NewTaskForm onCreate={handleOnCreate}/>

        <div className={styles.todoListWrapper}>
          
          <TasksInfo 
            done={totalTaskDone} 
            total={taskList.length}
          />

          {taskList.length === 0 ? <EmptyTasks /> : taskListRender}
        </div>

      </main>
    </>
  )
}


