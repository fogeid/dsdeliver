import './style.css';
import imgHome from '../../assets/imgHome.png';

function HomeContent() {
    return (
        <div className="home__container">
            <div className="home__wrapper">
                <h1 className="home__title">Faça seu pedido que entregamos pra você!!!</h1>
                <p className="home__subtitle">Escolha o seu pedido e em poucos minutos levaremoss na sua porta</p>
                <a href="orders" className="home__btn">Fazer Pedido</a>
            </div>
            <img src={imgHome} className="home__img" alt="Entrega Comida"/>
        </div>
    );
};

export default HomeContent;