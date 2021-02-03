import './style.css';
import imgHome from '../../assets/imgHome.png';

function HomeContent() {
    return (
        <div className="home__container">
            <div className="home__wrapper">
                <h1>Faça seu pedido que entregamos pra você!!!</h1>
                <p>Escolha o seu pedido e em poucos minutos levaremoss na sua porta</p>
                <a href="orders"><button>Fazer Pedido</button></a>
            </div>
            <img src={imgHome} alt="Entrega Comida"/>
        </div>
    );
};

export default HomeContent;