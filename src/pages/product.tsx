import React, { useState, useEffect } from 'react';
import axios from 'axios';


interface Product {
    id: number;
    name: string;
    price: number;
    user_id: number;
}

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const apiUrl = 'http://127.0.0.1:5000/products';
                const accessToken = localStorage.getItem('accessToken');
                console.log(accessToken)
                if (!accessToken) {
                    throw new Error('Access token not found');
                }

                const response = await axios.get<Product[]>(apiUrl, {
                    headers: {
                        'Authorization': ` ${accessToken}`,
                    }
                });

                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>User ID</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.user_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
