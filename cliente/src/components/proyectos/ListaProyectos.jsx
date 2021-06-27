import { useContext,useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from '../../context/proyectos/proyectoContext';

import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListaProyectos = () => {

    const proyectosContext = useContext(proyectoContext);
    const {proyectos,obtenerProyectos} = proyectosContext

    useEffect(() => {
        obtenerProyectos();
        // eslint-disable-next-line
    },[])
    

    //Revisar si los proyectos tienen contenido
    if(proyectos.length === 0 ) return <p>No hay proyectos, Crea tu siguiente proyecto</p>;
    
    return (  
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto.id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListaProyectos;