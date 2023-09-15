import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'
import todoLogo from '../assets/todo.svg'

export function Header() {
    return (
        <header className={styles.todoHeader}>
            <img src={rocketLogo} alt="Todo List Rocket Logo" />
            <img className={styles.todo} src={todoLogo} alt="Todo List Logo" />
        </header>
    )
}