import {  Link } from "react-router-dom";





const PublicHeader = () => {
    return (
        <>
        
        <header>
            <img className="logo" src="/src/assets/Logo1.png" alt="" />
            <nav>  
                <ul>
                    <li><Link to='/home'>Accueil</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/occasions'>Occasions</Link></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Link to='/auth'>Private</Link></li>
                </ul>
            </nav>          
            <div className="link-testimonials">
                <span>Laisser un Temoignage</span>
                <button ><Link to='/temoignages'>Aller</Link></button>
            </div>
        </header>
        
        </>
    );
};

export default PublicHeader;