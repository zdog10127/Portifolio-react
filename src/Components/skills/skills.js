import { useEffect } from 'react';
import './skills.css'

export default function Skills() {

    var passou = true;

    const restDescription = 'de experiência com essa tecnologia.'
    const listColors = ['#83cd29', '#68217a', '#e62c2d', '#61dafb', '#61dafb', ' #e54d26', '#3d8fc6', '#007acc', '#f0db4f']; 
    const titles = ['Node.js', 'C Sharp', 'Java', 'React Native', 'React', 'HTML5', 'CSS3', 'TypeScript', 'JavaScript'];
    const progress = ['120', '120', '33.33', '120', '120', '120', '120', '120', '120']
    const descriptions = 
    [
    `2 anos ${restDescription}`,
    `2 anos ${restDescription}`,
    `4 meses ${restDescription}`,
    `2 anos ${restDescription}`,
    `2 anos ${restDescription}`,
    `2 anos ${restDescription}`,
    `2 ano ${restDescription}`,
    `2 ano ${restDescription}`,
    `2 ano ${restDescription}`
    ];

    function criaListener(id) {
        return function() {
            document.querySelector('progress').value = progress[id];
            document.querySelector('.description').innerHTML = descriptions[id];
            document.querySelector('.title-description').innerHTML = titles[id];
            document.body.style.setProperty('--skillColor', listColors[id]);
        }
    }

    useEffect(() => {
        if (passou) {
            passou = false
            const items = document.querySelectorAll('.single-item');

            for (var i = 0; i < items.length; i++) {
                items[i].onmouseover = criaListener(i);
            }
        }  
    }, []);

    return (
        <section class="page-section" id="skills">
            <h2 class="title-page"><span>Minhas skills</span></h2>
            <div class="wrapper">
                <div class="description-skills">
                    <h2 class="title-description">Skill</h2>
                    <progress max="200" value="0"></progress>
                    <p class="description">Passe o mouse/aperte em cima de alguma skill para ver o tempo de experiência</p>
                </div>
                <div class="container-skills">
                    <div class="single-item">
                        <i class="devicon-nodejs-plain colored" id="icon-language"></i>
                    </div>
                    <div class="single-item">
                        <i class="devicon-csharp-plain-wordmark colored" id="icon-language"></i>
                    </div>
                    <div class="single-item mg-1">
                        <i class="devicon-java-plain-wordmark colored" id="icon-language"></i>
                    </div>
                    <div class="single-item mg-1">
                        <i class="devicon-react-original colored" id="icon-language"></i>
                    </div>
                    <div class="single-item">
                        <i class="devicon-react-original-wordmark colored" id="icon-language"></i>
                    </div>
                    <div class="single-item mg-1">
                        <i class="devicon-html5-plain-wordmark colored" id="icon-language"></i>
                    </div>
                    <div class="single-item mg-1">
                        <i class="devicon-css3-plain-wordmark colored" id="icon-language"></i>
                    </div>
                    <div class="single-item">
                        <i class="devicon-typescript-plain colored" id="icon-language"></i>
                    </div>
                    <div class="single-item">
                        <i class="devicon-javascript-plain colored" id="icon-language"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}