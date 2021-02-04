import './style.css';
import Youtube from '../../assets/youtube.png';
import Linkedin from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png';

function Footer() {
    return (
        <div className="footer__container">
            <p>App desenvolvido durante a 2ª ed. do evento <strong>Semana DevSuperior</strong></p>
            <div className="footer__icons">
                <ul>
                    <li>
                        <a href="https://fogeid.github.io/" target="_new">
                            <img src={Youtube} alt=""/>
                        </a>
                    </li>

                    <li>
                        <a href="https://fogeid.github.io/" target="_new">
                            <img src={Linkedin} alt=""/>
                        </a>
                    </li>

                    <li>
                        <a href="https://fogeid.github.io/" target="_new">
                            <img src={Instagram} alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;