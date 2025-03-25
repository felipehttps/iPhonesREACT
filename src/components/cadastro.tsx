import { Link } from "react-router-dom";
import { Button, Form, Home, Logo } from "../styles/home.style";
import { InputPro } from "../buttons/inputs";
import { TitleLogin } from "../buttons/input.styles";
import { FormEvent, useState } from "react";
import { supabase } from "../assets/supabase";
import styles from './footer/home.module.css';

export const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; ///

       
        if (!emailRegex.test(email)) {
            setMessage("Por favor, insira um e-mail válido!");
            return; 
        }

      
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            setMessage(error.message);
            return;
        }
        if (data) {
            setMessage("Cadastro realizado com sucesso!"); 
        }

        setEmail("");
        setPassword("");
    };

    return (
        <Home>
            <Logo src="/logotransp.png" />
            <Form onSubmit={handleSubmit}>
                <TitleLogin>CADASTRO</TitleLogin>
                {message && <span className={styles.tag}>{message}</span>}
                <InputPro 
                    title="Your e-mail" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    placeholder="e-mail" 
                    required 
                />
                <InputPro 
                    title="Your password" 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="senha" 
                    value={password} 
                    required 
                />
                <Link to="/">Já possui uma conta? Clique aqui</Link>
                <Button type="submit">Sign Up</Button>
            </Form>
        </Home>
    );
}; 