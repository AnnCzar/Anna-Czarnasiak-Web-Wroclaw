import { useCart } from '../context/CartContext';
import products from '../data/products.json';
import { Link } from 'react-router-dom';
import './CartSummaryPage.css'; // Używamy tego samego pliku CSS

function ProductsPage() {
    const { addToCart } = useCart();

    return (
        <div className="page">
            <h1>Lista produktów</h1>

            {products.map(product => (
                <div key={product.id} className="page-item">
                    <div className="item-name">{product.name}</div>
                    <div className="item-details">
                        <div className="price-info">
                            <span>Cena: {product.price.main},{product.price.fractional < 10 ? '0' + product.price.fractional : product.price.fractional} zł</span>
                        </div>
                        <div className="item-total">
                            <button onClick={() => addToCart(product)}>Dodaj do koszyka</button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="cart-summary">
                <div className="cart-actions">
                    <Link to="/cart">Przejdź do koszyka</Link>
                </div>
            </div>
        </div>
    );
}

export default ProductsPage;
