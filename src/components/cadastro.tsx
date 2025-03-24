import { Form, Link } from "react-router-dom";
import { Button, Logo } from "../styles/home.style";
import { InputPro } from "../buttons/inputs";
import { TitleLogin } from "../buttons/input.styles";
import { Checkbox } from "../buttons/checkbox";


export const Cadastro = () => {
    return (
    <Form>
                <Logo src="/logotransp.png" ></Logo>
                <TitleLogin>CADASTRO</TitleLogin>
                <InputPro title="Your e-mail" onChange={handleUsername} value={username} placeholder="e-mail" required></InputPro>
                <InputPro title="Your password" type="password" onChange={handlePassword} placeholder="senha" value={password}></InputPro>
                <Checkbox />
                <Link to="/login" >Ja possui uma conta? Clique aqui</Link>
                <Button type="submit" onClick={handleLogin} >Sign in</Button>
            </Form>
    )
};