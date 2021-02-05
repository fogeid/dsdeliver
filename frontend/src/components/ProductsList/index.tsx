import './style.css';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../pages/Orders/types';

type Props = {
    products: Product[];
};

function ProductsList({ products }: Props) {
    return (
        <div className="list__container">
            <div className="list__items">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />                    
                ))};
            </div>
        </div>
    );
};

export default ProductsList;