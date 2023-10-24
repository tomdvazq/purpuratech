import { Link } from "react-router-dom"
import { branding } from "../../calls/Brand"
import { useState } from "react";

const Register = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handlerRegister = async (event) => {
        event.preventDefault();
    }

    return (
        <div className='authContainer'>
            <div className='auth'>
                {branding.map((brand) => (
                    <div className='branding' key={brand.name}>
                            <img style={brand.styleLogo} src={brand.img} alt={brand.name}/>
                        <h4 dangerouslySetInnerHTML={{ __html: brand.name }} />
                    </div>
                ))}
                <h1>Con el programa de contribuyentes de Púrpura Tech, por cada cliente que nos consigas se te pagará un <strong>10% del costo del servicio</strong> ✨</h1>
                <form onSubmit={handlerRegister}>
                    <div className="two">
                        <div className="formInput">
                            <input className='inputForm' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder=" "/>
                            <label className='labelForm' htmlFor="name">Nombre(s)</label>
                        </div>
                        <div className="formInput">
                            <input className='inputForm' type="text" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder=" "/>
                            <label className='labelForm' htmlFor="surname">Apellido(s)</label>
                        </div>
                    </div>
                    <div className="inputContainer one">
                        <div className="formInput">
                            <input className='inputForm' type="text" id='user' value={username} onChange={(e) => setUsername(e.target.value)} placeholder=" "/>
                            <label className='labelForm' htmlFor="user">Nombre de usuario</label>
                        </div>
                    </div>
                    <div className="inputContainer two">
                        <div className="formInput">
                            <input className='inputForm' type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" "/>
                            <label className='labelForm' htmlFor="password">Contraseña</label>
                        </div>
                        <div className="formInput">
                            <input className='inputForm' type="text" id='repeatPassword' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder=" "/>
                            <label className='labelForm' htmlFor="repeatPassword">Reingrese la contraseña</label>
                        </div>
                    </div>
                    <div className="inputContainer two">
                        <div className="formInput">
                            <input className='inputForm' type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" "/>
                            <label className='labelForm' htmlFor="email">Email</label>
                        </div>
                        <div className="formInput">
                            <input className='inputForm' type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder=" "/>
                            <label className='labelForm' htmlFor="phone">Teléfono</label>
                        </div>
                    </div>
                    <button type="submit">Regístrate y empieza a contribuir</button>
                    <span><Link to="/login">o inicia sesión...</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Register