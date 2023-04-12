import styles from './Menu.module.css'

interface MenuProps {
    isToggle: boolean;
}

export function Menu({ isToggle }: MenuProps) {
    return (
        <nav className={isToggle ? styles.navContainer : styles.navFalse}>
            <ul className={styles.ulList}>
                <li>
                    <a href="#"> SOBRE </a>
                </li>
                <li>
                    <a href="#"> FAMÍLIAS </a>
                </li>
                <li>
                    <a href="#"> REGIÕES </a>
                </li>
                <li>
                    <button className={styles.buttonContact}>
                        CONTATO
                    </button>
                </li>
            </ul>
        </nav>
    )
}