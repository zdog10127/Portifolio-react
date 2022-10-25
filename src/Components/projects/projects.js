import './projects.css';
import Slider from "react-slick";

export default function Projects() {
    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <section class="page-light" id="projects">
            <h3 class="title-page">Projetos</h3>
            <div class="container-projects">
                <Slider {...settings}>
                    <div class="item-projects img-1">
                        <div class="img-overlay"></div>
                        <a href="https://react-pokedex-tau-one.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <h3>Pokedex</h3>
                            <p>Pokédex é uma biblioteca sobre todos os pokémons existentes no mundo e facil de ajudar quem quer saber mais sobre esse mundo.</p>
                        </a>
                    </div>
                    <div class="item-projects img-2">
                        <a href="https://happy-five.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <h3>Happy</h3>
                            <p>O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz 💜</p>
                        </a>
                    </div>
                    <div class="item-projects img-3">
                        <a href="https://github.com/zdog10127" target="_blank" rel="noopener noreferrer">
                            <h3>Github</h3>
                            <p>Para acessar todos meus projetos acesse meu github.</p>
                        </a>
                    </div>
                </Slider>
            </div>
        </section>
    );
}