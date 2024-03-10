import SearchCarBar from "../../components/layout/public/searchCarBar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import { carServices } from "../../_services/carServices";


const SecondHand = () => {

    const navigate = useNavigate()

    const handleCardCar= (car)=>{
        navigate(`./fiche/${car.id}`, {state:{car}})
    }

    const [cars, setCars]= useState([])
        
    useEffect(()=>{
        carServices.getPublicCars()
        .then(cars =>{
            // console.log(cars.data.data);
            const allCars = cars.data.data
            setCars(allCars)
        })
        .catch(e => console.log(e))
    },[])

    return (
        <main style={{flexDirection:'column', justifyContent:'flex-start', alignItems:'center', gap:'20px', marginTop:'10px'}}>
            <h1>Occasions</h1>
            <SearchCarBar/>
        <section style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'20px', marginTop:'10px'}}>
            {cars.map(car =>(
            <div key={car.id} style={{display:'flex', flexDirection:"column", alignItems:"center"}}>
                <div id={car.id} style={{border:"solid black 1px",borderRadius:'20px', width:'auto', padding:'15px', cursor:"pointer"}} onClick={()=>handleCardCar(car)}>
                    <img style={{width:'150px', height:'100px'}} src={`data:image/${car.images.img1description.split('.')[1]};base64, ${car.images.img1}`} alt={car.images.img1description} />
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
        </main>
    );
};

export default SecondHand;