import { useState } from "react";
import styles from "./Donation.module.css";

export function Donation() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.welcome}>
          Seja bem vindo ao programa <span>REVOLUCIONAR ©</span>
          {/* <p> Aqui você consegue ajudar diversas famílias carentes do nosso Brasil.</p> */}
        </div>
    
        

        {/* <div className={styles.donationContainer}>
          <h1>
            Já somos mais de{" "}
            <span className={styles.contributors}>500.000</span> envolvidos,
            faça também sua doação !
          </h1>
          <h3>Valor arrecatado até hoje: R$1,256,453,67</h3>
          <h3>
            Acreditamos em um futuro com mais igualdade e oportunidade para
            todos.
            <span>REVOLUCIONAR ©</span>
          </h3>
        </div> */}
      </div>
    </main>
  );
}
