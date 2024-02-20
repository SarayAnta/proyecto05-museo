import { Outlet } from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./footer/footer";

const LayoutPublic = () => { //LayoutPublic es un componente que se encarga de renderizar el componente Nav, el componente Footer y el componente Outlet que se encarga de renderizar el componente que se encuentre en la ruta que se le indique
    return ( //Retorna el componente Nav, el componente Footer y el componente Outlet
        <div>
            <Nav/>
                <Outlet />
            <Footer/>
        </div>
    );
};
export default LayoutPublic;