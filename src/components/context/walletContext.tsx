import React, { createContext, useState, ReactNode } from "react";



export interface WalletData {
    date: Date | null,
    name: string,
    description: string
}

export interface WalletContextProps {
    walletData:WalletData,
    setWalletDate: (date:Date | null)=> void,
    setWalletName: (name:string)=> void,
    setWalletDescription: (description:string)=> void
}
    
export const WalletDataContext = createContext<WalletContextProps | undefined>(undefined)

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [walletDate, setWalletDate] = useState<Date | null>(null);
    const [walletName, setWalletName] = useState<string>('');
    const [walletDescription, setWalletDescription] = useState<string>('');
    const walletData: WalletData = {
        date: walletDate,
        name: walletName,
        description: walletDescription
    };

    return(
            <WalletDataContext.Provider value={{ walletData, setWalletDate, setWalletName, setWalletDescription }}>
                {children}
            </WalletDataContext.Provider>
    );
}
