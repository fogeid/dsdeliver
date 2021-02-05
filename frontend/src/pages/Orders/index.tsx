import { useEffect, useState } from "react";
import { Product } from './types';
import { fetchProducts } from '../../services/api';
import Navbar from "../../components/Navbar";
import StepsHeader from "../../components/StepsHeader";
import ProductsList from "../../components/ProductsList";
import Footer from '../../components/Footer';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error));
    }, []);

    return (
        <>
            <Navbar />
            <StepsHeader />
            <ProductsList products={products} />
            <Footer />
        </>
    )
}

export default Orders;