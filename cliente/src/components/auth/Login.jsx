import { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const [ usuario, setUsuario ] = useState({
        email: '',
        password: ''
    });

    //Extraer los datos del state
    const { email, password } = usuario;

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value 
        });
    }

    //Cuando se da click al boton submit
    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacios

        //Pasarlo al action


    }

    return (  
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingresa tu correo"
                            onChange={onChange}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingresa tu Contraseña"
                            onChange={onChange}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesion"
                        />
                    </div>
                </form>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Nueva Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;