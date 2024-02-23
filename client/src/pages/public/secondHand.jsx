
import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react"

const SecondHand = ({}) => {

    const navigate = useNavigate()

    /* const [car, setCars]= useState({
        
    }) */
    


    return (

        <main style={{flexDirection:'column', justifyContent:'flex-start', gap:'20px', marginTop:'10px'}}>
            <h1>Occasions</h1>
            <div  style={{display:'flex', flexDirection:"column", alignItems:"center"}}>
                <div id='007' style={{border:"solid black 1px", width:'auto', padding:'15px', cursor:"pointer"}} onClick={(e)=> navigate('./fiche/'+ e.currentTarget.id)}>
                    <img style={{width:'50px', height:'50px'}} src="/src/__assets/LogoVoitureColoriage.png" alt="" />
                    <h3>Renault</h3>
                    <span>Twingo</span>
                    <p>10 000km</p>
                </div>
                
            </div>
        </main>
    );
};

export default SecondHand;