import styles from "../styles/Home.module.css";

export default function Home() {
  const submitContact = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const age = +event.target.age.value;
    const weight = +event.target.weight.value;
    const height = +event.target.height.value;
    const option = +event.target.select.value;

    console.log(
      `Nome: ${name}. Peso: ${weight}. Altura: ${height}.  Idade: ${age}. Opção selecionada: ${option}.`
    );
    console.log(66.473 + 13.7516 * weight + 5.0033 * height - 6.755 * age);

    // Fator de Atividade física
    switch (option) {
      case 0:
        // Dormindo ou deitado
        console.log("GEB x 1");
        break;
      case 1:
        // Atividades muito leves
        console.log("GEB x 1,2 a 1,5");
        break;
      case 2:
        // Atividades leves
        console.log("GEB x 1,6 a 2,5");
        break;
      case 3:
        // Atividades moderadas
        console.log("GEB x 3,0 a 5,0");
        break;
      default:
        // Dormindo ou deitado
        console.log("GEB x 1");
        break;
    }
  };
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Tabela</h1>
      <form className={styles.form} onSubmit={submitContact}>
        <label htmlFor="name">Nome</label>
        <input type="text" name="name" id="name" className={styles.input} />

        <label htmlFor="age">Idade</label>
        <input type="number" name="age" id="age" className={styles.input} />

        <label htmlFor="weight">Peso</label>
        <input type="text" name="weight" id="weight" className={styles.input} />

        <label htmlFor="height">Altura (em cm)</label>
        <input
          type="number"
          name="height"
          id="height"
          className={styles.input}
        />

        <label htmlFor="select">
          Informe sua quantidade semanal de exercícios:
        </label>
        <select name="select" id="select" className={styles.input}>
          <option value="0" selected>
            Nunca
          </option>
          <option value="1">1-3 dias na semana</option>
          <option value="2">4-5 dias na semana</option>
          <option value="3">6-7 dias na semana</option>
        </select>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
