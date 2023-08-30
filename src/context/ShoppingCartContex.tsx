import { ReactNode, createContext, useContext } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}

const ShoppingCartContext = createContext({})

export function useShippingCart() {
    
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}