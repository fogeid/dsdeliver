import { Product } from '../../pages/Orders/types';
import './style.css';

type Props = {
    product: Product;
};

function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return formatter.format(price);
};

function ProductCard({ product }: Props) {
    return (
        <div className="card__container">
            <h3 className="card__title">{product.name}</h3>
            <img
                src={product.imageUri}
                className="card__img"
                alt={product.name}
            />
            <h3 className="card__price">
                {formatPrice(product.price)}
            </h3>
            <div className="card__description">
                <h3>Descrição</h3>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;