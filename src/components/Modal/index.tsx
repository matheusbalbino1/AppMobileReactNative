import React, { useContext } from "react";
import { Input } from "../Input";
import { ModalRN, Title, Main, ButtonEditar, TextBtnEditar } from "./styles";
import { useState } from "react";
import { EmpresaProps, EmpresasContext } from "../../contexts/empresas";

interface Props {
    empresa: EmpresaProps;
    visible: boolean;
    handleVisible: (paremetro: boolean) => void;
    edit: boolean;
    // EDIT É PARA SABER SE É PERMITIDO EDIÇÃO DOS INPUTS
}

export function Modal({ empresa, handleVisible, edit, ...rest }: Props ) {

    const [nome, setNome] = useState(empresa.nome)
    const [cnpj, setCnpj] = useState(empresa.cnpj)
    const [cep, setCep] = useState(empresa.cep)
    const [endereco, setEndereco] = useState(empresa.endereco)
    const [numero, setNumero] = useState(empresa.numero)
    const [bairro, setBairro] = useState(empresa.bairro)
    const [uf, setUf] = useState(empresa.uf)
    const [cidade, setCidade] = useState(empresa.cidade)

    // RECEBER TODAS AS EMPRESAS CADASTRADAS E A FUNÇÃO PARA ALTERAR ELAS
    const { empresas, alterarEmpresas } = useContext(EmpresasContext)

    function handleSubmit() {
        // ALTERAR A EMPRESA SE FOR NO MODO DE EDIÇÃO
        if (edit) {
            let newEmpresa = {
                id: empresa.id, nome, cnpj, cep, endereco, numero, bairro, uf, cidade
            }
            let filtradas: EmpresaProps[] = []
            empresas.map((item) => {
                if (item.id !== empresa.id) {
                    filtradas.push(item)
                }
            })
            alterarEmpresas([...filtradas, newEmpresa])
        }
        // FECHER O MODAL
        handleVisible(false)
        return
    }

    return (
        <ModalRN {...rest}>
            <Title>Editar empresa</Title>
            <Main>
                <Input
                  name="Nome da empresa"
                  placeholder="ex: Microsoft"
                  onChangeText={setNome}
                  value={nome}
                  editable={edit}
                  style={edit ? {fontSize:20} : {fontSize:30}} />
                <Input
                  name="CNPJ (apenas números)"
                  placeholder="ex: 44236543123190"
                  keyboardType="numeric"
                  maxLength={14}
                  onChangeText={setCnpj}
                  value={cnpj}
                  editable={edit}
                  style={edit ? {fontSize:20} : {fontSize:30}} />
                <Input
                  name="CEP (apenas números)"
                  placeholder="ex: 08940033"
                  keyboardType="numeric"
                  autoComplete="postal-address"
                  maxLength={8}
                  onChangeText={setCep}
                  value={cep}
                  editable={edit}
                  style={edit ? {fontSize:20} : {fontSize:30}} />
                <Input
                  name="Endereço"
                  placeholder="ex: Avenida Paulista"
                  onChangeText={setEndereco}
                  value={endereco}
                  editable={edit}
                  style={edit ? {fontSize:20} : {fontSize:30}} />
                <Input
                  name="Número"
                  placeholder="ex: 93B"
                  keyboardType="number-pad"
                  onChangeText={setNumero}
                  value={numero}
                  editable={edit}
                  style={edit ? {fontSize:20} : {fontSize:30}} />
                <Input
                  name="Bairro"
                  placeholder="ex: Santana"
                  onChangeText={setBairro}
                  value={bairro}
                  editable={edit}
                  style={edit ? {fontSize:20} : {fontSize:30}} />
                <Input
                  name="UF"
                  placeholder="ex: MG"
                  onChangeText={setUf}
                  value={uf}
                  editable={edit}
                  maxLength={2}
                  style={edit ? {fontSize:20} : {fontSize:30}} />
                <Input
                  name="Cidade"
                  placeholder="ex: Belo Horizonte"
                  onChangeText={setCidade}
                  value={cidade}
                  editable={edit}
                  style={edit ? {fontSize:20} : {fontSize:30}} />
                <ButtonEditar activeOpacity={0.7} onPress={() => { handleSubmit() }}>
                    <TextBtnEditar>{edit ? "Finalizar edição" : "Fechar"}</TextBtnEditar>
                </ButtonEditar>
            </Main>
        </ModalRN>
    )
}