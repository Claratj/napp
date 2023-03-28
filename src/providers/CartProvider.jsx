import { createContext, useState } from 'react';

export const cartContext = createContext();

export default function CartProvider({ children }) {
	const [cartValue, setCartValue] = useState(0);

	return <cartContext.Provider value={{ cartValue, setCartValue }}>{children}</cartContext.Provider>;
}
