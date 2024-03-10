import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { carServices } from "../../../_services/carServices";

const PublicSideBarSecondHand = () => {

    const location = useLocation()
    // console.log(location);
    const navigate = useNavigate()
    const role = location.pathname.split('/')[1]
    // console.log(role);

    const handleCardCar= (car)=>{
        if(role !== 'home'){
            return navigate(`/${role}/occasions/fiche/${car.id}`, {state:{car}})
        }
        return navigate(`/occasions/fiche/${car.id}`, {state:{car}})
    }

    const [cars, setCars]= useState([])
            
    useEffect(()=>{
        carServices.getPublicCars()
        .then(cars =>{
            const allCars = cars.data.data
            setCars(allCars)
            
        })
        .catch(e => console.log(e))
        
    },[])

    return (
        <section className="sidebar-occasions">Occasions
        <section style={{display:'flex', flexDirection:'column', justifyContent:'center', gap:'10px', marginTop:'5px'}}>
            {cars.map(car =>(
            <div key={car.id} style={{display:'flex', flexDirection:"column", alignItems:"center"}}>
                <div id={car.id} style={{border:"solid black 1px",borderRadius:'20px', backgroundColor:'antiquewhite', boxShadow:'20px 20px 20px 6px rgba(0, 0, 0, 0.8)', width:'auto', padding:'15px', cursor:"pointer"}} onClick={()=>handleCardCar(car)}>
                    <img style={{width:'100px', height:'60px'}} src={`data:image/${car.images.img1description.split('.')[1]};base64, ${car.images.img1}`} alt={car.images.img1description} />
                    <h2>{car.brand}</h2>
                    <h3>{car.model}</h3>
                    <h4>{car.motor}</h4>
                    <p>{car.kilometers} km</p>
                    <p>Dmc: {car.initial_registration}</p>
                    <h2>{car.price} €</h2>
                </div>
                
            </div>
            ))}
        </section>
        
        </section>
    );
};

export default PublicSideBarSecondHand ;