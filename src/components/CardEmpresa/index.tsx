import React, { useState } from "react";
import { ContainerEmpresa, Nome, Cnpj, ButtonVer, ButtonEdit, TextButton, ContainerButtons } from "./styles"
import Icon from "react-native-vector-icons/Feather"
import { EmpresaProps } from "../../contexts/empresas";
import { Modal } from "../Modal";

interface Props{
    item:EmpresaProps;
}

export function CardEmpresa({item}:Props) {
    // ABRIR E FECHAR O MODAL
    const [visibleModal, setVisibleModal] = useState(false)

    // PARA PERMITIR EDIÇÃO NOS INPUTS DO MODAL
    const [permitirEdit, setPermitirEdit] = useState(true)

    // CLIQUE NO BOTÃO EDITAR
    function handleClickEdit(){
        setPermitirEdit(true)
        setVisibleModal(true)
        return
    }

    // CLIQUE NO BOTÃO VER
    function handleClickVer(){
        setPermitirEdit(false)
        setVisibleModal(true)
        return
    }
    return (
        <ContainerEmpresa>
            <Nome>{item.nome}</Nome>
            <Cnpj>CNPJ: {item.cnpj}</Cnpj>
            <ContainerButtons>
                <ButtonVer activeOpacity={0.6} onPress={()=>{handleClickVer()}}>
                    <TextButton>
                        VER <Icon name="eye" size={20} />
                    </TextButton>
                </ButtonVer>
                <ButtonEdit activeOpacity={0.6}  onPress={()=>{handleClickEdit()}}>
                    <TextButton>
                        EDITAR <Icon name="edit" size={20} />
                    </TextButton>
                </ButtonEdit>
            </ContainerButtons>
            <Modal visible={visibleModal} empresa={item} handleVisible={setVisibleModal} edit={permitirEdit}/>
        </ContainerEmpresa>
    )
}