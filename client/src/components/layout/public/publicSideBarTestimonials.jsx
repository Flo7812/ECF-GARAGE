import { useState, useEffect } from "react";
import { testimonyServices } from "../../../_services/testimonyServices";

const PublicSideBarTestimonials = () => {

    const [testimonials, setTestimonials]= useState([])
        
    useEffect(()=>{
        testimonyServices.getValidateTestimonials()
        .then(testimonials =>{
            const allTestimonials = testimonials.data.data
            setTestimonials(allTestimonials)
        })
        .catch(e => console.log(e))
    },[])

    return (
        <section className="sidebar-temoignages">Temoignages
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', gap:'10px', marginTop:'5px'}}>
            {testimonials.map(testimony =>(
            <div key={testimony.id} style={{display:'flex', flexDirection:"column", alignItems:"center"}}>
                <div id={testimony.id} style={{border:"solid black 1px",borderRadius:'20px', backgroundColor:'antiquewhite', boxShadow:'20px 20px 20px 6px rgba(0, 0, 0, 0.8)', width:'auto', padding:'15px'}}>
                    <p><em>"{testimony.content}"</em></p>
                    <p>{testimony.author_first_name}  {testimony.author_last_name}</p>
                    <p>{testimony.createdAt.split('T')[0]}</p>
                </div>
                
            </div>
            ))}
        </div>
        
        </section>
    );
};

export default PublicSideBarTestimonials;