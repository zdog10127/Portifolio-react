import icon from '../header/assets/img-icon.jpg';
import Curriculo from './assets/Curriculo.pdf'
import './about.css';

export default function About() {
    return (
        <section class="page-light" id="about">
            <h2 class="title-page">Sobre mim</h2>
            <div class="about-section">
                <div class="left-img">
                    <img src={icon} class="img-about" alt="icon"></img>
                </div>
                <div class="right-text">
                    <div class="texto-about">
                        <h3>Quem sou eu?</h3>
                        <p>
                        Me chamo Gabriel e sou Full Stack Developer 💻 no  Brasil. Formado em Sistemas de Informação no instituto Uniaraxa. Me interessei nesta areá após trabalhar com um projeto em Unity e desde então tenho desenvolvido minhas habilidades para se tornar um otimo desenvolvedor.
                        </p>
                        <a href={Curriculo} target="_blank" rel="noreferrer" className="btn btn-primary">Currículo</a>
                    </div>
                </div>
            </div>
        </section>
    );
}