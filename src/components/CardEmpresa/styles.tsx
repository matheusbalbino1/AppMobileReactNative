import styled from "styled-components";
import {View,Text, Button, TouchableOpacity} from "react-native"

export const ContainerEmpresa = styled(View)`
    background-color: ${({theme})=>theme.colors.white000};
    border:2px solid ${({theme})=>theme.colors.blue80};
    margin: 20px 0;
`

export const Nome = styled(Text)`
font-size:20px;
background-color:${({theme})=>theme.colors.blue80};
color:${({theme})=>theme.colors.white000};
text-align:center;
font-weight: bold;
padding:10px;
`

export const Cnpj = styled(Text)`
padding:10px;
color:${({theme})=>theme.colors.blue80};
font-size:20px;
text-align: center;
font-weight: bold;
`
export const ContainerButtons = styled(View)`
flex-direction: row;
`
export const ButtonVer = styled(TouchableOpacity)`
    width:50%;
    background-color: ${({theme})=>theme.colors.yellow80};
    padding:10px;
`

export const ButtonEdit = styled(TouchableOpacity)`
width:50%;
background-color: ${({theme})=>theme.colors.orange70};
    padding:10px;
`

export const TextButton = styled(Text)`
text-align:center;
color:${({theme})=>theme.colors.white000};
font-weight: bold;
font-size: 20px;
`