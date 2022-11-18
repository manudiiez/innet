import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../css/page/login.css'

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    });
    const navigate = useNavigate()

    const { loading, error, dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post("http://localhost:8800/api/user/login", credentials);
            console.log(res);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/");
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };
    return (
        <div className='login-container'>
            <div className="content">
                <h1>MiSalud</h1>
                <div className='container-form'>
                    <div className="header">
                        <div></div>
                        <p>Iniciar sesion</p>
                        <div></div>
                    </div>
                    <form onSubmit={handleClick}>
                        <div>
                            <label>Nombre de usuario <span>*</span></label>
                            <input type="text" name="username" placeholder='Nombre de usuario' onChange={handleChange} />
                        </div>
                        <div>
                            <label>Contraseña <span>*</span></label>
                            <input type="password" name="password" placeholder='Contraseña' onChange={handleChange} />
                        </div>

                        <button type='submit' disabled={loading} ><span>Iniciar sesion</span></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login