import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

function ProductDetails() {
  const { name } = useParams();
  const [product, setProduct] = useState<{ name: string; description: string; image: string } | null>(null);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find((p: { name: string }) => p.name === name);
        setProduct(found);
      });
  }, [name]);

  if (!product) return <div className="pageContent">Product not found.</div>;

  return (
    <div className="page">
      <h4>{product.name}</h4>
      <div className="pageContent">
        <p><strong>Description:</strong> {product.description}</p>
        <img src={product.image} alt={product.name} style={{ maxWidth: '200px' }} />
      </div>
    </div>
  );
}

export default ProductDetails;
