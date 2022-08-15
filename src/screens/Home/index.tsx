import React, { useContext } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { CardEmpresa } from "../../components/CardEmpresa";
import { EmpresasContext } from "../../contexts/empresas";
import { Logo, ButtonCadastrar, TextVazio, Container, TextButtonCadastrar } from "./styles"

interface Props {
    navigation: {
        navigate: (parametro: string) => void;
    };
}

export function Home({ navigation }: Props) {
    // RECEBER TODAS AS EMPRESAS CADASTRADAS
    const { empresas } = useContext(EmpresasContext)

    return (
        <Container>
            <Logo>MOQUPS</Logo>
           
           {/* SE TIVER EMPRESA CADASTRADAS */}
            {empresas[0] ? (
                <ScrollView>
                    {empresas.map((empresa) => (
                        <CardEmpresa item={empresa} key={empresa.id} />
                    ))}
                </ScrollView>
            )
                :
                <>
                    <TextVazio>Nenhuma empresa cadastrada</TextVazio>
                    <ButtonCadastrar onPress={() => { navigation.navigate("Cadastrar") }}>
                        <TextButtonCadastrar>
                            Cadastrar empresa
                        </TextButtonCadastrar>
                    </ButtonCadastrar>
                </>
            }
        </Container>
    )
}