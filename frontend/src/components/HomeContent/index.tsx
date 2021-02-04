import './style.css';
import imgHome from '../../assets/imgHome.png';
import { Link } from 'react-router-dom';

function HomeContent() {
    return (
        <div className="home__container">
            <div className="home__wrapper">
                <h1 className="home__title">Faça seu pedido que entregamos pra você!!!</h1>
                <p className="home__subtitle">Escolha o seu pedido e em poucos minutos levaremoss na sua porta</p>
                <Link to="/orders" className="home__btn">Fazer Pedido</Link>
            </div>
            <img src={imgHome} className="home__img" alt="Entrega Comida"/>
        </div>
    );
};

export default HomeContent;