
import React, { createContext, useContext, useState } from 'react';

//definiowanie typów
type Product = {
    id: number;
    name: string;
    price: { main: number; fractional: number };
};

type CartItem = Product & { quantity: number };

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
};


//zdef. kontekstu
const CartContext = createContext<CartContextType | undefined>(undefined);


//udost. kontekstu
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCart(prev => {
            const found = prev.find(item => item.id === product.id);
            return found
                ? prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
                : [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => setCart(prev => prev.filter(item => item.id !== id));

    const updateQuantity = (id: number, quantity: number) => {
        if (quantity <= 0) removeFromCart(id);
        else setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
    };
    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("CartContext not found");
    return ctx;
};
