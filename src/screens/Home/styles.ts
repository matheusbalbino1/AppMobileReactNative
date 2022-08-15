import styled from "styled-components";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

export const Container = styled(View)`
flex:1;
background: ${(props)=> props.theme.colors.white000};
justify-content: space-between;
padding:20px 12px 0 12px;
`

export const Logo = styled(Text)`
font-size: 30px;
text-align: center;
color:${(props)=>props.theme.colors.blue80};
font-weight: bold;
margin-top: 10px;
`
export const TextVazio = styled(Text)`
color:${(props)=>props.theme.colors.blue35};
text-align: center;
font-size: 30px;
font-weight: bold;
`

export const TextButtonCadastrar = styled(Text)`
text-align: center;
font-size: 24px;
color:${(props)=>props.theme.colors.white000};
font-weight: bold;
`

export const ButtonCadastrar = styled(TouchableOpacity)`
margin-bottom: 35px;
text-align: center;
background-color: ${(props)=>props.theme.colors.blue80};
padding:15px;
border-radius: 5px;
`

export const ContainerEmpresas = styled(ScrollView)`
margin-bottom: 20px;
`

