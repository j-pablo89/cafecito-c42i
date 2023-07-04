import { Navigate } from "react-router-dom";

//children hace referencia a las rutas protegidas, en este caso las rutas del administrador
const RutasProtegidas = ({children}) => {
    //logica que quiero averiguar
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;
    //quiero saber si el usuario no esta logueado
    if(!usuarioLogueado){
        return <Navigate to='/login'></Navigate>
    }else{
        return children;
    }
};

export default RutasProtegidas;