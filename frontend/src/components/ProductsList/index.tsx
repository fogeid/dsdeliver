import ProductCard from '../../components/ProductCard';
import { Product } from '../../pages/Orders/types';
import { checkIsSelected } from '../../pages/Orders/helpers';
import './style.css';

type Props = {
    products: Product[];
    selectedProducts: Product[];
    onSelectProduct: (product: Product) => void;
};

function ProductsList({ products, onSelectProduct, selectedProducts }: Props) {
    return (
        <div className="list__container">
            <div className="list__items">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onSelectProduct={onSelectProduct}
                        isSelected={checkIsSelected(selectedProducts, product)}
                    />
                ))};
            </div>
        </div>
    );
};

export default ProductsList;