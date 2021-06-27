import { useContext,useState,useEffect } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext;


    //obtener la funcion del context de tareas
    const tareasContext = useContext(tareaContext);
    const {tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea  } = tareasContext;

    //Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null){
            setTarea(tareaseleccionada)
        }else{
            setTarea({
                nombre: ''
            })
        }
    },[tareaseleccionada])

    //State del formulario
    const [tarea,setTarea] = useState({
        nombre: '',

    })


    if(!proyecto) return null;

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    //Leer los valores del formulario
    const handleChange = e => {
            setTarea({
                ...tarea,
                [e.target.name]: e.target.value
            })
    }

    //Extraer el nombre del proyecto
    const { nombre } = tarea

    const onSubmit = e => {
        e.preventDefault();

        //Validar
        if(nombre.trim() === ''){
            validarTarea();
            return ;
        }   

        //Si es edicion o si es nueva tarea
        if(tareaseleccionada === null){
             //Agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        }else{
            //Actualiza la informacion de la tarea
            actualizarTarea(tarea)
        }

       

        //Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id)


        //reiniciar el form
        setTarea({
            nombre: ''
        })
    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea...."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> :null}
        </div>
    );
}
 
export default FormTarea;