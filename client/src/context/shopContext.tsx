import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, createContext } from "react";
import all_product from "../data/all_product";

type ShopContextType = {
    all_product: typeof all_product;
  };

export const ShopContext = createContext<ShopContextType>({ all_product });

export const ShopContextProvider = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
    const contextValue = {all_product};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}