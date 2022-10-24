import './footer.css';

export default function Footer() {
    return (
        <footer class="page-footer" id="footer">
            <div class="social">   
                <a href="https://www.linkedin.com/in/gabriel-teles-76a486161/" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-linkedin" id="icon-linkedin"></i></a>
                <a href="https://github.com/zdog10127" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-github" id="icon-github"></i></a>
                <a href="https://www.instagram.com/zdog___/" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-instagram" id="icon-instagram"></i></a>
                <a href="https://api.whatsapp.com/send/?phone=5534984163160&type=phone_number" rel="noopener noreferrer" target="_blank"><i class="fa-brands fa-whatsapp" id="icon-whatsapp"></i></a>
            </div>
            <div class="copyright">
                <p>Gabriel Teles 2022 @</p>
            </div>
        </footer>
    );
}