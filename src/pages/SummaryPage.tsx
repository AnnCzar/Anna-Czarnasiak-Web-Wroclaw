import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import './CartSummaryPage.css';

function SummaryPage() {
    const { cart } = useCart();


    const total = cart.reduce((sum, p) => sum + p.quantity * (p.price.main + p.price.fractional / 100), 0);

    const handleOrder = () => {
        localStorage.setItem("lastOrder", JSON.stringify(cart));
        window.location.href = "/confirmationPage.html";
    };

    return (
        <div className="page">
            <h1>Podsumowanie zamówienia</h1>

            {cart.map(p => (
                <div key={p.id} className="page-item">
                    <div className="item-name">{p.name}</div>
                    <div className="item-details">
                        <div className="price-info">
                            <span>Cena: {p.price.main},{p.price.fractional < 10 ? '0' + p.price.fractional : p.price.fractional} zł</span>
                        </div>
                        <div className="price-info">
                            <span>Ilość: {p.quantity}</span>
                        </div>
                        <div className="item-total">
                            Suma: {(p.quantity * (p.price.main + p.price.fractional / 100)).toFixed(2)} zł
                        </div>
                    </div>
                </div>
            ))}

            <div className="cart-summary">
                <div className="total">Łącznie: {total.toFixed(2)} zł</div>
                <div className="cart-actions">
                    <button onClick={handleOrder}>
                        Złóż Zamówienie
                    </button>
                    <Link to="/cart">Powrót do koszyka</Link>
                </div>
            </div>
        </div>
    );
}

export default SummaryPage;
