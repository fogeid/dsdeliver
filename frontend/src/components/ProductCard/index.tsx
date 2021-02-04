import './style.css';
import imgCard from "../../assets/pizzacalabresaacebolada.png";

function ProductCard() {
    return (
        <div className="card__container">
            <h3 className="card__title">Pizza Calabresa</h3>
            <img src={imgCard} className="card__img" alt=""/>
            <h3 className="card__price">R$ 35,90</h3>
            <div className="card__description">
                <h3>Descrição</h3>
                <p>
                    Uma deliciosa combinação de Linguiça Calabresa, rodelas de cebolas frescas, azeitonas pretas, mussarela, polpa de tomate, orégano e massa especial.
                </p>                 
            </div>
        </div>
    );
};

export default ProductCard;