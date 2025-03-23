import { InputHTMLAttributes } from "react";
import {  Input } from "../styles/home.style";
import { BoxInput, TitleInput } from "./input.styles";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    title ?: string;
}


export const InputPro = ({title, ...props}: InputProps) => {
    return (
        <BoxInput>
            {title &&<TitleInput>{title}</TitleInput>}
            <Input {...props}  />
            
        </BoxInput>
        
    );
};