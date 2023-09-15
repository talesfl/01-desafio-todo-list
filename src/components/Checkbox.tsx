import { useState } from 'react'
import styles from './Checkbox.module.css'

import { Check } from 'phosphor-react'

interface CheckboxProps {
    checked?: boolean
    onValueChange: (value: boolean) => void
}

export function Checkbox({ checked = false, onValueChange = () => { } }: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(checked);

    function handleClick() {
        const newValue = !isChecked
        setIsChecked(newValue)
        onValueChange(newValue)
    }

    const checkMark = isChecked ? <Check size={12} weight="bold" /> : undefined

    return (
        <button
            onClick={handleClick}
            className={isChecked ? styles.checkboxChecked : styles.checkbox}
        >
            {checkMark}
        </button>
    )
}