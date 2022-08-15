import React, { useContext, useState } from "react";
import { Input } from "../../components/Input";
import { Logo, Container, Header, Title, Main, ButtonCadastrar, TextBtnCadastrar } from "./styles"
import {EmpresasContext} from "../../contexts/empresas"

interface Props {
    navigation: {
        navigate: (parametro: string) => void;
    };
}
export function Cadastrar({ navigation }: Props) {
    // PARA CONTROLAR OS INPUTS
    const [nome, setNome] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [cep, setCep] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [bairro, setBairro] = useState("")
    const [uf, setUf] = useState("")
    const [cidade, setCidade] = useState("")

    // RECEBER TODAS AS EMPRESAS CADASTRADAS E A FUNÇÃO PARA ALTERAR AS EMPRESAS CADASTRADAS
    const {empresas, alterarEmpresas} = useContext(EmpresasContext)

    function handleSubmit(){
        // PARA NÃO PERMITIR INPUT EM BRANCO
        if (!!nome && !!cnpj && !!cep && !!endereco && !!numero && !!bairro && !!uf && !!cidade){

            const novaEmpresa = {
                id:nome+cep+endereco,
                nome,
                cnpj,
                cep,
                endereco,
                numero,
                bairro,
                uf,
                cidade
            }            

            // LIMPAR OS INPUTS
            setNome("")
            setCnpj("")
            setCep("")
            setEndereco("")
            setNumero("")
            setBairro("")
            setUf("")
            setCidade("")
            // ADICIONAR A NOVA EMPRESA AS EMPRESAS CADASTRADAS
            alterarEmpresas([...empresas, novaEmpresa])

            // ENVIAR PARA A PAGINA HOME
            navigation.navigate("Home")
            
        }
        return
    }

    return (
        <Container>
            <Header>
                <Logo>MOQUPS</Logo>
                <Title>Formulário de cadastro</Title>
            </Header>
            <Main>
                <Input name="Nome da empresa" placeholder="ex: Microsoft" onChangeText={setNome} value={nome}/>
                <Input name="CNPJ (apenas números)" placeholder="ex: 44236543123190" keyboardType="numeric" onChangeText={setCnpj} value={cnpj} maxLength={14}/>
                <Input name="CEP (apenas números)" autoComplete="postal-address" placeholder="ex: 08940033" onChangeText={setCep} keyboardType="numeric" value={cep} maxLength={8}/>
                <Input name="Endereço" placeholder="ex: Avenida Paulista" onChangeText={setEndereco} value={endereco}/>
                <Input name="Número" placeholder="ex: 93B" onChangeText={setNumero} value={numero}/>
                <Input name="Bairro" placeholder="ex: Santana" onChangeText={setBairro} value={bairro}/>
                <Input name="UF" placeholder="ex: MG" onChangeText={setUf} value={uf} maxLength={2}/>
                <Input name="Cidade" placeholder="ex: Belo Horizonte" onChangeText={setCidade} value={cidade}/>
                <ButtonCadastrar activeOpacity={0.7} onPress={()=>{handleSubmit()}}>
                    <TextBtnCadastrar>Cadastrar</TextBtnCadastrar>
                </ButtonCadastrar>
            </Main>
        </Container>
    )
}