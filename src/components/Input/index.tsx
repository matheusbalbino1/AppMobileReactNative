import React from "react";
import { View } from "react-native";
import { Label, TextInput } from "./styles";

interface Props {
    name:string;
    placeholder:string;
    onChangeText:(parametro: string)=>void;
    value:string;
    editable?:boolean;
    style?:{
        fontSize:number;
    }
    keyboardType?:string;
    autoComplete?:string;
    maxLength?:number;
}

export function Input({name, placeholder, ...rest}: Props) {
    return (
        <View style={{marginBottom:19}}>
            <Label>{name}</Label>
            <TextInput placeholder={placeholder} {...rest}/>
        </View>
    )
}