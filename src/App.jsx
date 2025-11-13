
import styles from'./App.module.css'
import perfil from '../public/perfil.png'
import IconInstagram from '../public/Instagram.png'
import IconFacebook from '../public/Facebook1.png'
import IconWhatsapp from '../public/Whastapp.png'
import IconLinkedin from '../public/Linkedin.png'


import BairroImage from '/RioBonito.png'
import TradegiaImage from '/Tragedia.png'



import { useState, useEffect} from 'react'
import { Card } from './components/card'

function App() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    fetch('/cardsInfo.json')
      .then((response) => response.json())
      .then(data => {
        setDados(data)
      })
  }, [])

  const defaultPhoneNumber = '5541984502786'

  const[formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })


const handleChange = (event) => {
  const{name, value} = event.target /* Os tres pontos é uma copia do outro form Data */
  setFormData({...formData, [name]: value}) /*...formData é para manter os outros valores que ja estao preenchidos */ 
}


 // console.log(formData)

  const handleZap = () => {
  const {name, email, message} = formData


  const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
  Nome:%20${name}%0D%0A
  Email:%20${email}%0D%0A
  Mensagem:%20${message}%0D%0A`


  window.open(urlZap, "_blank")
 }
  
// Aqui vai o Java script
  return (
    // Abaixo é o HTML
    // Anexo ao return só pode ter um elemento pai ou seja um elemento só
    /* Consegue colocar vários elementos gracas as setas o maior e o menor*/
    <> 
      
      <nav className={styles.menu}>
        <a href="#s1">Quem Sou Eu</a>
        <a href="#s2">Tecnologias Usadas</a>
        <a href="#s3">Meus Repositórios</a>
        <a href="#s5">Curiosidades</a>
        <a href="#s4">Contato</a>
        
        
      </nav>
      <main>
        <section className={styles.s1} id ='s1'>
          <div className={styles.left}>
            <img className={styles.imgPerfil} src={perfil} alt="Foto Perfil" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Alexandre Souza</h2>
            <p className={styles.paragraph}> Informático, Robótico e Desenvolvedor iniciante. Sou estudante do SENAI PR e estou aprendendo a programação.</p>
          </div>
        </section>

        <section className={styles.s2} id ='s2'>
          <h2 className={styles.tecTitle}>Tecnologias</h2>
          <div className={styles.wrapCards}>
            {dados.map((item) => {
              return (
                <div key={item.id}>
                <div>
                <Card
                  tec={item.tecnologia}
                  image={item.imagem}
                  text={item.texto}/>
                  </div>
                  </div>
              )
            })}
          </div>
        </section>
    
        <section id='s3' className={styles.s3}>
          <h2>GitHub Repositorios </h2>
        </section>

      <section id='s5' className={styles.meubairro}>
        <h2>O bairro Rio Bonito</h2>
        <div className={styles.bairro}>
          <img width={400} src={BairroImage} alt="Bairro Rio Bonito" />
          <img width={400} src={TradegiaImage} alt="Bairro Rio Bonito" />
          <p>O bairro Rio Bonito em Curitiba, Paraná, Brasil, é conhecido por sua diversidade cultural e história rica. Fundado no início do século XX, o bairro tem raízes que remontam aos imigrantes europeus, especialmente italianos e poloneses, que se estabeleceram na região. Ao longo dos anos, Rio Bonito desenvolveu uma identidade única, combinando tradições antigas com influências modernas.</p>
          </div>
          </section>


        <section id='s4' className={styles.s4}>
          <h2>Contato</h2>
          <div className={styles.formData}>
            <label htmlFor="name">Informe seu nome</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            <label htmlFor="email">Informe seu email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            <label htmlFor="message">Informe uma mensagem</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} cols="30" rows="10"required></textarea>
            <button onClick={handleZap}>Enviar</button>
          </div>
        </section>
      </main>
      <footer className={styles.rodape}>
        <p>Desenvolvido por Alexandre Souza</p>
        <a href='https://www.instagram.com/zxandinhouz/' target='_blank' rel='noopener noreferrer'> <img width={70} src={IconInstagram} alt='Instagram'/> </a>
        <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'> <img width={70} src={IconFacebook} alt='Facebook'/> </a>
        <a href='https://www.whatsapp.com/' target='_blank' rel='noopener noreferrer'> <img width={70} src={IconWhatsapp} alt='WhatsApp'/> </a>
        <a href='https://www.linkedin.com/in/alexandre-souza-santos-b87487395/' target='_blank' rel='noopener noreferrer'> <img width={70} src={IconLinkedin} alt='Linkedin'/> </a>
      </footer>
    </>
  )
}

export default App

