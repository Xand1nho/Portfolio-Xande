import styles from './App.module.css'

import perfil from '/perfil.png'
import IconInstagram from '/Instagram.png'
import IconFacebook from '/Facebook1.png'
import IconWhatsapp from '/Whastapp.png'
import IconLinkedin from '/Linkedin.png'

import { useState, useEffect } from 'react'
import { Card } from './components/card'

function App() {
  const [dados, setDados] = useState([]);
  const [repos, setRepos] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const defaultPhoneNumber = '5541984502786';

  // Buscar os meus respoistorios
  useEffect(() => {
    fetch('https://api.github.com/users/Xand1nho/repos?sort=updated')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(err => console.error("Erro GitHub:", err));
  }, []);

  
  useEffect(() => {
    fetch('/cardsInfo.json')
      .then((response) => response.json())
      .then(data => setDados(data))
      .catch(err => console.error("Erro JSON:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleZap = () => {
    const { name, email, message } = formData;
    const urlZap = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=Nome:%20${name}%0D%0AEmail:%20${email}%0D%0AMensagem:%20${message}`;
    window.open(urlZap, "_blank");
  };

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Quem Sou Eu</a>
        <a href="#s2">Tecnologias</a>
        <a href="#s3">Projetos</a>
        <a href="#s5">Objetivos</a>
        <a href="#s4">Contato</a>
      </nav>

      <main>
        <section className={styles.s1} id='s1'>
          <div className={styles.left}>
            <img className={styles.imgPerfil} src={perfil} alt="Foto Perfil" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Alexandre Souza</h2>
            <p className={styles.paragraph}>
              Estudante de Técnico em Desenvolvimento de Sistemas pelo SENAI. Busco experiências positivas e aprendizado constante em programação e robótica.
            </p>
          </div>
        </section>

        <section className={styles.s2} id='s2'>
          <h2 className={styles.tecTitle}>Tecnologias</h2>
          <div className={styles.wrapCards}>
            {dados.map((item) => (
              <div key={item.id}>
                <Card tec={item.tecnologia} image={item.imagem} text={item.texto} />
              </div>
            ))}
          </div>
        </section>

        <section id='s3' className={styles.s3}>
          <h2>GitHub Repositórios</h2>
          <div className={styles.repoGrid}>
            {repos.map((repo) => (
              <div key={repo.id} className={styles.repoCard}>
                <h3>{repo.name}</h3>
                <p>{repo.description || "Sem descrição disponível."}</p>
                <span className={styles.language}>{repo.language}</span>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
                  Ver Repositório
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id='s5' className={styles.objetivos}>
          <h2>Objetivos & Hab. Sociais</h2>
          <div className={styles.containerObjetivos}>
            <div className={styles.cardObjetivo}>
              <h3>Meu Objetivo</h3>
              <p>Aplicar meus conhecimentos do SENAI em projetos reais e crescer no mercado de trabalho.</p>
            </div>
            <div className={styles.cardObjetivo}>
              <h3>Habilidades</h3>
              <ul className={styles.listaSkills}>
                <li>🤝 Trabalho em equipe</li>
                <li>👴 Respeito à experiência </li>
                <li>🎯 Comunicação clara</li>
                <li>🚀 Proatividade</li>
              </ul>
            </div>
          </div>
        </section>

        <section id='s4' className={styles.s4}>
          <h2>Contato</h2>
          <div className={styles.formData}>
            <input type="text" name="name" placeholder="Seu nome" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Seu e-mail" value={formData.email} onChange={handleChange} />
            <textarea name="message" placeholder="Sua mensagem" value={formData.message} onChange={handleChange} rows="5"></textarea>
            <button onClick={handleZap}>Enviar para WhatsApp</button>
          </div>
        </section>
      </main>

      <footer className={styles.rodape}>
        <p>Desenvolvido por Alexandre Souza</p>
        <div className={styles.socialIcons}>
          <a href='https://www.instagram.com/xandpe/' target='_blank' rel='noopener noreferrer'> <img width={40} src={IconInstagram} alt='Instagram' /> </a>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'> <img width={40} src={IconFacebook} alt='Facebook' /> </a>
          <a href='https://www.whatsapp.com/' target='_blank' rel='noopener noreferrer'> <img width={40} src={IconWhatsapp} alt='WhatsApp' /> </a>
          <a href='https://www.linkedin.com/in/alexandre-souza-santos-b87487395/' target='_blank' rel='noopener noreferrer'> <img width={40} src={IconLinkedin} alt='Linkedin' /> </a>
        </div>
      </footer>
    </>
  );
}


export default App; 
