import { Link } from "react-router-dom";
import { Button, Form, Home, Logo } from "../styles/home.style";
import { InputPro } from "../buttons/inputs";
import { TitleLogin } from "../buttons/input.styles";
import { FormEvent, useState } from "react";
import { supabase } from "../assets/supabase";


export const Cadastro = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [message, setMessage] = useState('')

        const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setMessage("");

        const {data, error} = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error){
            setMessage(error.message);
            return;
        }
        if (data){
            setMessage("Logado!");
        }
        setEmail("");
        setPassword("");

        };


    return (
        <Home>
            <Logo src="/logotransp.png" ></Logo>
            <Form onSubmit={handleSubmit}>
                <TitleLogin>CADASTRO</TitleLogin>
                {message && <span>{message}</span>}
                <InputPro title="Your e-mail" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="e-mail" required></InputPro>
                <InputPro title="Your password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="senha" value={password} required></InputPro>
                <Link to="/" >Ja possui uma conta? Clique aqui</Link>
                <Button type="submit" >Sign Un</Button>
            </Form>
        </Home>
    )
};