const Header = () => {
    return (  
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Luis Navarro</span></p>
            <nav className="nav-principal">
                <a href="#!">Cerrar Sesion</a>
            </nav>
        </header>
    );
}

export default Header;