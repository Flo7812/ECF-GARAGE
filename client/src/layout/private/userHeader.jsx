import { Link } from "react-router-dom";

const UserHeader= () => {

    return (
        <header>
            <img className="logo" src="/src/assets/Logo1.png" alt="" />
            <nav>
                <ul>
                    <li><Link to='/user/publicHome'>Accueil</Link></li>
                    <li><Link to='/user/services'>Services</Link></li>
                    <li><Link to='/user/occasions'>Occasions</Link></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <ul>
                    <li><Link to='/user/addCars'>Ajout Voiture</Link></li>
                    <li><Link to='/user/cars'>Voitures</Link></li>
                    <li><Link to='/user/testimonies'>temoignages</Link></li>
                    <li><Link to='/user/home'>compte</Link></li>
                </ul>
            </nav>
            <div>
                <span>User Connect:</span>
                <button>Logout</button>
            </div>
        </header>
    );
};

export default UserHeader;