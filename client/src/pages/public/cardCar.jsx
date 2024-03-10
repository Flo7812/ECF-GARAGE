import { useParams, useLocation } from "react-router-dom";



const CardCar = () => {
    const url = useParams()
    const location = useLocation()

    const car = location.state.car
    console.log(car);

    const handleCick= (e)=>{

        window.open(e.target.src)
    }
    const role = location.pathname.split('/')[1]
    console.log(role);

    return (
        <main style={{flexDirection:'column', justifyContent:'flex-start', gap:'20px', marginTop:'10px'}}>
            <p>url : {url["*"] }</p>
            {/* <span>{car.id}</span> */}
            <div  style={{display:'flex', flexDirection:"column", alignItems:"center", }}>
                <div id={car.id} style={{border:"solid black 1px", width:'auto', padding:'15px'}} onClick={handleCick}  >
                    <h4>ref :{car.ref}</h4>
                    <img style={{width:'300px', height:'220px', cursor:"pointer"}} src={`data:image/${car.images.img1description.split('.')[1]};base64, ${car.images.img1}`} alt={car.images.img1description} />
                    <h1>{car.brand}</h1>
                    <h2>{car.model}</h2>
                    <h3>{car.motor}</h3>
                    <h4>{car.kilometers} km</h4>
                    <p>DMC :{car.initial_registration}</p>
                    <h2>{car.price} €</h2>
                    <p style={{fontSize:'1.5rem'}}><em>{car.description}</em></p>
                    
                    {role === "admin" || role === "user" ? 
                    <div>
                        <button>modifier</button> 
                        <button>infos</button>
                    </div>: 
                    <button type="button">contact</button>}

                </div>
                
            </div>
        </main>

    );
};

export default CardCar;