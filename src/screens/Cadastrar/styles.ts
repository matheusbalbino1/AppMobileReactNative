import styled from "styled-components";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

export const Container = styled(View)`
flex:1;
background: ${(props)=> props.theme.colors.white000};
justify-content: space-between;
padding: 20px 10px 0 10px;
`

export const Logo = styled(Text)`
margin-top: 10px;
font-size: 30px;
text-align: center;
color:${(props)=>props.theme.colors.blue80};
font-weight: bold;
`

export const Title = styled(Text)`
text-align: center;
margin: 10px 0 30px 0;
font-size: 20px;
color: ${(props)=>props.theme.colors.black1000};
letter-spacing: 4px;
font-weight: bold;
`
export const Header = styled(View)`
`

export const Main = styled(ScrollView)`
margin-bottom: 30px;
`

export const ButtonCadastrar = styled(TouchableOpacity)`
background-color: ${({theme})=>theme.colors.orange70};
padding:15px;
border-radius: 5px;
`

export const TextBtnCadastrar = styled(Text)`
text-align: center;
color:${({theme})=>theme.colors.white000};
font-size: 20px;
`