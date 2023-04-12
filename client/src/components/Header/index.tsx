import styles from "./Header.module.css";
import { RxHamburgerMenu } from 'react-icons/rx'
import menuOpen from '../../assets/menu.svg'
import menuClose from '../../assets/close.svg'
import logo from '../../assets/logo.png'
import { useState } from "react";
import { Menu } from "../Menu";

export function Header() {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div className={styles.containerHeader}>
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


        <img src={toggle ? menuClose: menuOpen} onClick={() => setToggle(prev => !prev)} className={styles.responsive}  alt="" />
        <Menu isToggle={toggle} />
      </div>
    </div>
  );
}
