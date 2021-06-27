import { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    const [ usuario, setUsuario ] = useState({
        nombre: '',
        email: '',
        password: '',
        confirm : ''
    });

    //Extraer los datos del state
    const { nombre, email, password, confirm } = usuario;

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

        //Password minimo de 6 caracteres

        //Los campos password deben coincidir

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
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Ingresa tu Nombre"
                            onChange={onChange}
                            value={nombre}
                        />
                    </div>
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
                        <label htmlFor="confirm">Contraseña</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Confirma tu Contraseña"
                            onChange={onChange}
                            value={confirm}
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
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesion
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;