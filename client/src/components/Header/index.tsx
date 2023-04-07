import styles from "./Header.module.css";
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <div className={styles.container}>
        <img src={logo} width={140} alt="logo" />
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
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
      </div>
    </div>
  );
}
