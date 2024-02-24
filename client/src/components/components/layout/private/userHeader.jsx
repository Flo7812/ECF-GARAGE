import { Link } from "react-router-dom";
import ConnectStatus from "./connectStatus";

const UserHeader= () => {

    return (
        <header>
            <img className="logo" src="/src/__assets/Logo1.png" alt="" />
            <nav>
                <ul>
                    <li><Link to='/user/publicHome'>Accueil</Link></li>
                    <li><Link to='/user/services'>Services</Link></li>
                    <li><Link to='/user/occasions'>Occasions</Link></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <ul>
                    <li><Link to='/user/addCar'>Ajout Voiture</Link></li>
                    <li><Link to='/user/cars'>Voitures</Link></li>
                    <li><Link to='/user/testimonials'>Temoignages</Link></li>
                </ul>
            </nav>
            <div>
                <ConnectStatus/>
            </div>
        </header>
    );
};

export default UserHeader;