import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { OrderLocationData, Product } from './types';
import { fetchProducts, saveOrder } from '../../services/api';
import Navbar from '../../components/Navbar';
import StepsHeader from '../../components/StepsHeader';
import ProductsList from '../../components/ProductsList';
import Location from '../../components/Location';
import Summary from '../../components/Summary';
import Footer from '../../components/Footer';
import { checkIsSelected } from './helpers';
import 'react-toastify/dist/ReactToastify.css';

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
            .catch(error => {
                toast.warning('Erro ao listar produtos');
            });
    }, []);

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        };
    };

    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
            ...orderLocation!,
            products: productsIds
        };

        saveOrder(payload).then((response) => {
            toast.dark(`Pedido enviado com sucesso! Nº ${response.data.id}`);
            setSelectedProducts([]);
        })
            .catch(() => {
                toast.warning('Erro ao enviar pedido');
            });
    };

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
                onSubmit={handleSubmit}
            />
            <Footer />
        </>
    )
};

export default Orders;