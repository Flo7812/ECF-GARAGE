import { useState, useEffect } from "react";
import { testimonyServices } from "../../_services/testimonyServices";


const UserHome = () => {
    const [testimonials, setTestimonials]= useState([])
        
    useEffect(()=>{
        testimonyServices.getToValidateTestimonials()
        .then(testimonials =>{
            console.log(testimonials);
            const allTestimonials = testimonials.data.data
            setTestimonials(allTestimonials)
        })
        .catch(e => console.log(e))
    },[])

    return (
        <main style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'center' }}>
            <h2>User Home</h2>
            <button style={{width:'100px'}}>Creer un temoignage</button>
            <section style={{display:'flex', flexDirection:'column', justifyContent:'center', gap:'10px', marginTop:'5px'}}>
                {testimonials.map(testimony =>(
                <div key={testimony.id} style={{display:'flex', flexDirection:"column", alignItems:"center"}}>
                    <div id={testimony.id} style={{border:"solid black 1px",borderRadius:'20px', backgroundColor:'antiquewhite', boxShadow:'20px 20px 20px 6px rgba(0, 0, 0, 0.8)', width:'auto', padding:'15px'}}>
                        <p><em>"{testimony.content}"</em></p>
                        <p>{testimony.author_first_name}  {testimony.author_last_name}</p>
                        <p>{testimony.author_email}</p>
                        <p>{testimony.createdAt.split('T')[0]}</p>
                        <div>
                            <button type="button">valider</button>
                            <button type="button">supprimer</button>
                        </div>
                    </div>
                    
                </div>
                ))}
            </section>
        </main>
    );
};

export default UserHome;
