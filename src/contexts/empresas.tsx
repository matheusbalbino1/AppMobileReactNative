import React, { createContext, ReactNode, useState } from "react";

type Props = {
    children: ReactNode;
}

export interface EmpresaProps {
    id:string;
    nome:string;
    cnpj:string;
    cep:string;
    endereco:string;
    numero:string;
    bairro:string;
    uf:string;
    cidade:string;
}

interface ContextoEmpresas {
    empresas: EmpresaProps[];
    alterarEmpresas:(parametro: EmpresaProps[]) => void;
}

export const EmpresasContext = createContext({} as ContextoEmpresas);

export const EmpresasCadastradasProvider = ({children}:Props) =>{

    const [empresas, setEmpresas] = useState<EmpresaProps[]>([])

    function alterarEmpresas(parametro: EmpresaProps[]){
        setEmpresas(parametro)
        return
    }

    return (
        <EmpresasContext.Provider value={{empresas, alterarEmpresas}}>
            {children}
        </EmpresasContext.Provider>
    )
}