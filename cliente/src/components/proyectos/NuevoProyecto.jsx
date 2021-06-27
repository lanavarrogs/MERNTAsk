import { Fragment,useContext,useState } from "react";

import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    //State del proyecto
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    const { nombre } = proyecto;

    //Lee los contenidos del input
    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    //Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();
        //Validar el proyecto
        if(nombre === ''){
            mostrarError();
            return ;
        }
        //Agregar al state
        agregarProyecto(proyecto)
        //Reiniciar el form
        setProyecto({
            nombre: ''
        })
    }

    return (
        <Fragment>  
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFormulario()}
            >Nuevo Proyecto</button>

            { formulario 
            ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placehoder = "Nombre del Proyecto"
                            name="nombre"
                            onChange={onChangeProyecto}
                            value={nombre}
                        />
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />
                    </form>
                )
            : null }
            { errorformulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p> : null }
        </Fragment>
    );
}

export default NuevoProyecto;