import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../../services/api';
import Navbar from '../../components/Navbar';
import StepsHeader from '../../components/StepsHeader';
import ProductsList from '../../components/ProductsList';
import Location from '../../components/Location';
import Summary from '../../components/Summary';
import Footer from '../../components/Footer';
import { checkIsSelected } from './helpers';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>()

    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }

    return (
        <>
            <Navbar />
            <StepsHeader />
            <ProductsList
                products={products}
                onSelectProduct={handleSelectProduct}
                selectedProducts={selectedProducts}
            />
            <Location
                onChangeLocation={location =>
                    setOrderLocation(location)}
            />
            <Summary
                amount={selectedProducts.length}
                totalPrice={totalPrice}
            />
            <Footer />
        </>
    )
}

export default Orders;