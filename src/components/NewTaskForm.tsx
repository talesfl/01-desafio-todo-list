import styles from './NewTaskForm.module.css'

import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'

import { TaskType } from './Task'

import { v4 as uuidv4 } from 'uuid'

interface NewTaskFormProps {
    onCreate: (task: TaskType) => void
}

export function NewTaskForm({ onCreate }: NewTaskFormProps) {
    const [taskDescription, setTaskDescription] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        onCreate({ 
            id: uuidv4(),
            description: taskDescription,
            done: false
        } as TaskType) 
        setTaskDescription('')
    }

    function handleInputChange(next: ChangeEvent<HTMLInputElement>) {
        setTaskDescription(next.target.value)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.newTaskForm}
        >

            <input
                className={styles.newTaskInput}
                type="text"
                value={taskDescription}
                onChange={handleInputChange}
                required
                placeholder="Adicione uma nova tarefa"
            />

            <button className={styles.formSubmitButton}>
                Criar
                <PlusCircle size={18} alt="Plus circle icon" />
            </button>

        </form>
    )
}