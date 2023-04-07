import styles from './Menu.module.css'

interface MenuProps {
    isOn: boolean;
}

export function Menu({ isOn }: MenuProps) {
    console.log(isOn);

    return (
        <nav className={isOn ? styles.navContainer : styles.navFalse}>
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