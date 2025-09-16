import { useEffect, useState } from 'react';
import { Link } from 'react-router';
function Products() {
    // Define the type for products (array of objects) including name, desc, image path
    const [products, setProducts] = useState<Array<{ name: string; description: string; image: string }>>([]);

    // Fetch products from products.json when the component loads
    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="page">
            <h4>Products</h4>
            <div className='pageContent'>
                <ul className="productList">
                    {/* List products with links to their details page */}
                    {products.map((product, idx) => (
                        <Link to={`/details/${product.name}`} key={idx} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <li className="productListItem">
                                {product.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Products