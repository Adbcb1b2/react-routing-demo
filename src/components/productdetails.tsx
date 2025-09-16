import {useParams} from 'react-router';
import { useEffect, useState } from 'react';

function ProductDetails() {
    // Get the product name from the route params
    const {name} = useParams();
    // State to hold the product details - product details or null
    const [product, setProduct] = useState<{name: string; description: String; image: string} | null>(null);

    // Fetch the products from products.json when the name param changes
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                // Find the product with the matching name
                const product = data.find((p: {name: string}) => p.name === name);
                // Update state with found product, or null
                setProduct(product || null);
            });
    }, [name]); 

    // If no product found, show message instead
    if(!product) return <div className="pageContent">Product not found!</div>

    // If a product is found, return its details
    return (
        <div className='page'>
            <h4>Product Details</h4>
            <div className='pageContent'>
                <table className='productTable'>
                    <tbody>
                        <tr>
                            <td>Name: </td>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <td>Description: </td>
                            <td>{product.description}</td>
                        </tr>
                        <tr>
                            <td>Image: </td>
                            <td><img src={product.image} alt={product.name} style={{ maxWidth: '200px' }} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductDetails;