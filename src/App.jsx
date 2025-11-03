
import styles from'./App.module.css'
import perfil from '../public/perfil.jpg'

function App() {
  
// Aqui vai o Java script
  return (
    // aqui é o HTML
    // aqui dentro do return só pode ter um elemento pai ou seja um elemento só
    /* Consegue colocar vários elementos gracas as setas o maior e o menor*/
    <>
      <h1 className="titulo">Descrição</h1>
      <nav className={styles.menu}>
        <a href="#s1">Quem Sou Eu</a>
        <a href="#s2">Minhas Habilidades</a>
        <a href="#s3">Como Eu Aprendo</a>
        <a href="#s4">Curiosidades</a>
      </nav>
      <main>
        <section className={styles.s1} id ='s1'>
          <div className={styles.left}>
            <img className={styles.imgPerfil} src={perfil} alt="Foto Perfil" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Alexandre Souza</h2>
            <p className={styles.paragraph}> Informático, Robótico e Desenvolvedor iniciante. Estou a 5 anos no Forja com a Parceria do SENAI, estou aprendendo a programar.</p>
          </div>
        </section>

        <section >
          <h2>Sessao 2</h2>
        </section>

        <section>
          <h2>Sessao 3</h2>
        </section>

        <section>
          <h2>Sessao 4</h2>
        </section>
      </main>
    </>
  )
}

export default App

