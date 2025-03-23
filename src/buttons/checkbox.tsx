import { InputHTMLAttributes } from "react";
import { Checkboxs, Labelcheck } from "./checkbox.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    title ?: string;
}

export const Checkbox = ({title, ...props}: InputProps) => {
    return (
        <Labelcheck>
            <Checkboxs {...props} type="checkbox"/>
            Ficar logado
        </Labelcheck>
    );
};