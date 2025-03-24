import { FormEvent, useState } from "react";
import { Checkbox } from "../buttons/checkbox";
import { TitleLogin } from "../buttons/input.styles";
import { InputPro } from "../buttons/inputs";
import { Button, Form, Logo } from "../styles/home.style";
import { supabase } from "../assets/supabase";
import { Link } from "react-router-dom";




export const Login = () => {

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
    
    
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.target.value);
    };
    
    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setUsername(event.target.value);
    };
    
    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        
    
        try {
          const { error } = await supabase.auth.signInWithPassword({
            email: username,
            password: password,
          });
    
          if (error) {
            console.error('Erro ao fazer login:', error);
          } else {
            console.log('Login realizado com sucesso!');
          }
        } catch (error) {
          console.error('Erro inesperado:', error);
        }
      };
  


    return (
        <Form>
            <Logo src="/logotransp.png" ></Logo>
            <TitleLogin>LOGIN</TitleLogin>
            <InputPro title="Your e-mail" onChange={handleUsername} value={username} placeholder="e-mail" required></InputPro>
            <InputPro title="Your password" type="password" onChange={handlePassword} placeholder="senha" value={password}></InputPro>
            <Checkbox />
            <Link to="/cadastro" >Não possui conta? Clique aqui</Link>
            <Button type="submit" onClick={handleLogin} >Sign in</Button>
        </Form>

    )
};