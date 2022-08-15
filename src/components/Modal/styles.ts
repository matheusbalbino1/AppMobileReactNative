import styled from "styled-components";
import { Modal, Text, ScrollView, TouchableOpacity } from "react-native";

export const ModalRN = styled(Modal)`
background: ${(props)=> props.theme.colors.white000};
`

export const Title = styled(Text)`
text-align: center;
margin: 20px 0 30px 0;
font-size: 20px;
color: ${(props)=>props.theme.colors.black1000};
letter-spacing: 4px;
font-weight: bold;
`

export const Main = styled(ScrollView)`
    padding:0 15px;
`

export const ButtonEditar = styled(TouchableOpacity)`
background-color: ${({theme})=>theme.colors.orange70};
padding:15px;
border-radius: 5px;
margin-bottom: 15px;
`

export const TextBtnEditar = styled(Text)`
text-align: center;
color:${({theme})=>theme.colors.white000};
font-size: 20px;

`