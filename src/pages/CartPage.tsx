import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import './CartSummaryPage.css';

function CartPage() {
    const { cart, updateQuantity, removeFromCart } = useCart();
    const navigate = useNavigate();

    const total = cart.reduce((sum, p) => sum + p.quantity * (p.price.main + p.price.fractional / 100), 0);

    return (
        <div className="page">
            <h1>Koszyk</h1>

            {cart.map(item => (
                <div key={item.id} className="page-item">
                    <div className="item-name">{item.name}</div>
                    <div className="item-details">
                        <div className="price-info">
                            <span>Cena: {item.price.main},{item.price.fractional < 10 ? '0' + item.price.fractional : item.price.fractional} zł</span>
                        </div>
                        <div className="quantity-control">
                            <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                            />
                            <button onClick={() => removeFromCart(item.id)}>Usuń</button>
                        </div>
                        <div className="item-total">
                            Suma: {(item.quantity * (item.price.main + item.price.fractional / 100)).toFixed(2)} zł
                        </div>
                    </div>
                </div>
            ))}

            <div className="cart-summary">
                <div className="total">Łącznie: {total.toFixed(2)} zł</div>
                <div className="cart-actions">
                    <button
                        onClick={() => navigate("/summary")}
                        disabled={cart.length === 0}
                    >
                        Przejdź do podsumowania
                    </button>
                    <Link to="/">Wróć do produktów</Link>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
