import './style.css';
import ProductCard from '../../components/ProductCard';

function ProductsList() {
    return (
        <div className="list__container">
            <div className="list__items">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default ProductsList;