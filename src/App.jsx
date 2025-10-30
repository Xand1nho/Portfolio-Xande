
import styles from'./App.module.css'

function App() {
  
// Aqui vai o Java script
  return (
    // aqui é o HTML
    // aqui dentro do return só pode ter um elemento pai ou seja um elemento só
    /* Consegue colocar vários elementos gracas as setas o maior e o menor*/
    <>
      <h1 className="titulo">Xandão</h1>
      <p className="descricao">Aqui vai uma descrição sobre o Xandão.</p>
      <nav className={styles.menu}>
        <a href="#s1">New Cars</a>
        <a href="#s2">Cars</a>
        <a href="#s3">Parts & Accessories</a>
        <a href="#s4">Who We Are</a>
      </nav>
      <main>
        <section>
          <h2>Sessao 1</h2>
        </section>

        <section>
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
