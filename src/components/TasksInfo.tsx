import styles from './TasksInfo.module.css'

interface TaskInfoProps {
    done: number,
    total: number
}

export function TasksInfo({ done = 0, total = 0 }: TaskInfoProps) {
    return (
        <header className={styles.taskInfo}>

            <span className={styles.createdTaks}>
                Tarefas criadas
                <span className={styles.taskCount}>{total}</span>
            </span>


            <span className={styles.concludedTasks}>
                Concluídas
                <span className={styles.taskCount}>{total === 0 ? total : `${done} de ${total}`}</span>
            </span>

        </header>
    )
}