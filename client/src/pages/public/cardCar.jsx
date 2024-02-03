import { useParams } from "react-router-dom";


const CardCar = () => {
    let cid = useParams()
    cid = cid["id"]
    const handleCick= (e)=>{
        // console.log(e.target.src);
        window.open(e.target.src)
    }
    const url = useParams()

    return (
        <main style={{flexDirection:'column', justifyContent:'flex-start', gap:'20px', marginTop:'10px'}}>
            <p>url : {url["*"] }</p>
            <span>Voiture numero de voiture: {cid}</span>
            <div  style={{display:'flex', flexDirection:"column", alignItems:"center", }}>
                <div id={cid} style={{border:"solid black 1px", width:'auto', padding:'15px'}} onClick={handleCick}  >
                    <img style={{width:'50px', height:'50px', cursor:"pointer"}} src="/src/assets/Sidious.jpeg" alt="" />
                    <h3>Renault</h3>
                    <span>Twingo</span>
                    <p>10 000km</p>
                </div>
                
            </div>
        </main>

    );
};

export default CardCar;