import { Link } from "react-router-dom";
import ConnectStatus from "@/layout/private/connectStatus";


const AdminHeader = () => {

    return (
        <header>
            <img className="logo" src="/src/__assets/Logo1.png" alt="" />
            <nav>
                <ul>
                    <li><Link to='/admin/publicHome'>Accueil</Link></li>
                    <li><Link to='/admin/services'>Services</Link></li>
                    <li><Link to='/admin/occasions'>Occasions</Link></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <ul>
                    <li><Link to='/admin/addCar'>Ajout Voiture</Link></li>
                    <li><Link to='/admin/Cars'>Voitures</Link></li>
                    <li><Link to='/admin/testimonials'>Temoignages</Link></li>
                </ul>
                <ul>
                    <li><Link to='/admin/addUser'>Ajout Employé</Link></li>
                    <li><Link to='/admin/users'>Gestion Employés</Link></li>
                    <li><Link to='/admin/sections'>Gestion Sections</Link></li>
                    
                </ul>
            </nav>
            <div>
                <ConnectStatus/>
            </div>
        </header>
    );
};

export default AdminHeader;