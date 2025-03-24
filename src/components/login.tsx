import { FormEvent, useState } from "react";
import { TitleLogin } from "../buttons/input.styles";
import { InputPro } from "../buttons/inputs";
import { Button, Form, Home, Logo } from "../styles/home.style";
import { supabase } from "../assets/supabase";
import { Link, useNavigate } from "react-router-dom";





export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setMessage("");

  const {data, error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
  });

  if (error){
      setMessage(error.message);
      setEmail("");
      setPassword("");

      return;
  }
  if (data){
      navigate("/site")
  }
  setEmail("");
  setPassword("");

  };


    return (
      <Home>
            <Logo src="/logotransp.png" ></Logo>
            <Form onSubmit={handleSubmit}>
                <TitleLogin>LOGIN</TitleLogin>
                {message && <span>{message}</span>}
                <InputPro title="Your e-mail" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="e-mail" required></InputPro>
                <InputPro title="Your password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="senha" value={password} required></InputPro>
                <Link to="/cadastro" >Nao possui uma conta? Clique aqui</Link>
                <Link to="/Site" >site</Link>
                <Button type="submit" >Sign Un</Button>
            </Form>
        </Home>

    )
};