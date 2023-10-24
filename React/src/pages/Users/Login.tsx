import { Link } from 'react-router-dom';
import { branding } from '../../calls/Brand';
import './Auth.css';
import { useState } from 'react';
import AuthUser from '../../api/AuthUser';
import Fieldsets from '../../components/AuthComponent/Fieldset/Fieldset';

const Login = () => {

    const {http, setToken} = AuthUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlerLogin = async (event) => {
        event.preventDefault();
        try{
            await http.post('/login', {email, password}).then((res) => {setToken(res.data.user, res.data.access_token)})
            setEmail("");
            setPassword("");
        } catch (e) {
            console.log(e);
        }
    };



    return (
        <div className='authContainer'>
            <div className='auth'>
                {branding.map((brand) => (
                    <div className='branding' key={brand.name}>
                            <img style={brand.styleLogo} src={brand.img} alt={brand.name}/>
                        <h4 dangerouslySetInnerHTML={{ __html: brand.name }} />
                    </div>
                ))}
    
                <h1>¡Es un placer verte nuevamente por aquí! 🤩</h1>

                <form className='login' onSubmit={handlerLogin}>
                    // Email del usuario
                    <Fieldsets 
                    inputType='text' 
                    inputId="user" 
                    labelFor="user" 
                    labelText="Nombre de usuario"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    // Contraseña del usuario
                    <Fieldsets 
                    inputType="password" 
                    inputId="password" 
                    labelFor="password" 
                    labelText="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    // Acciones
                    <button type="submit">Iniciar sesión como afiliado</button>
                    <span><Link to="/register">o crea una cuenta...</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login