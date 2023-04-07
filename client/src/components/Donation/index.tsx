import styles from "./Donation.module.css";
import educacao from '../../images/educacao.jpg'
import esporte from '../../images/esporte.jpg'
import natacao from '../../images/natacao.jpg'
import felicidade from '../../images/felicidade.jpg'
import instrucao from '../../images/instrucao.jpg'

export function Donation() {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.welcome}>
          Seja bem vindo ao programa <span>REVOLUCIONAR ©</span>
          <p> Aqui você consegue ajudar diversas famílias carentes do nosso Brasil.</p>
        </h1>
        <div className={styles.imagesContainer}>
          <img src={esporte} width={240} alt="criança jogando bola" />
          <img src={natacao} width={240} alt="criança nadando" />
          <img src={instrucao} width={240} alt="criança instruindo" />
          <img src={educacao} width={240} alt="criança estudando" />
          <img src={felicidade} width={240} alt="criança brincando" />
        </div>
        <div className={styles.donationContainer}>
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
        </div>
      </div>
    </main>
  );
}
