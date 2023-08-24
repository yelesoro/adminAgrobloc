import { createContext, useContext, useState } from 'react';

const ContractContext = createContext();

export function ContractProvider({ children }) {
    const [ContractInfo, setContractInfo] = useState({
        contractId: "",
        contractCode: "",
        productName: "",
        weight: "",
        amount:"",
    });

    return (
        <ContractContext.Provider value={{ ContractInfo, setContractInfo }}>
            {children}
        </ContractContext.Provider>
    );
}

export function useContract() {
    return useContext(ContractContext);
}