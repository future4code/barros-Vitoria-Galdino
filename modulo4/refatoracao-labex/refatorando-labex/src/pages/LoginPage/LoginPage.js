import React from 'react';
import useForm from "../../hooks/useForm"
import { login } from "../../services/request"
import { useNavigate } from 'react-router-dom'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import { ButtonsContainer, Titulo, DivBase, ImgAstronauta } from "./styled"
import { goToHomePage } from '../../routes/Coordinator'
import astronauta from "./img/astronauta-space.png";

const LoginPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const { form, onChange } = useForm({ email: "", password: "" })

    const onClickLogin = (e) => {
        e.preventDefault()
        login(form, navigate)
    }

    return (
        <div>
        <Titulo>Login</Titulo>
        <DivBase>
            <ImgAstronauta src={astronauta} />
            
            <form onSubmit={onClickLogin}>
                <input
                    placeholder={"E-mail"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                
                <input
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <ButtonsContainer>
                    <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                    <button type={"submit"}>Entrar</button>
                </ButtonsContainer>
                
            </form>
            
        </DivBase>
        </div>
        
        
    )

}

export default LoginPage;