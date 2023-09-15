import styles from './EmptyTasks.module.css'

import { ClipboardText } from 'phosphor-react'

export function EmptyTasks() {
    return (
        <main className={styles.emptyTasks}>
            <ClipboardText size={56} alt="Clipboar with text icon" />
            <div className={styles.text}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </main>
    )
}