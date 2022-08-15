import styled from "styled-components";
import {Text, TextInput as Input} from "react-native"

export const Label = styled(Text)`
font-size: 20px;
`
export const TextInput = styled(Input)`
border:2px solid ${({theme})=>theme.colors.gray60};
border-radius: 5px;
padding:15px 0px 15px 15px;
font-size: 20px;
`