import { useState, useEffect } from "react";
import {sectionsServices} from '../../../_services/sectionsServices'

const PublicSectionHome = () => {

    const [sections, setSections]= useState()
        
    useEffect(()=>{
        sectionsServices.getSectionsHome()
        .then(sections =>{
            const allSections = sections.data.data
            setSections(allSections)
        })
        .catch(e => console.log(e))
    },[])

    return (

        <section className="home-accueil" >
            {sections && sections.length > 0 && (
            <>
            <button className="selecteur">1</button>
            <img /* style={{width:'600px', height:'400px', position:'relative'}} */ src={`data:image/${sections[0].imgDescription.split('.')[1]};base64, ${sections[0].img}`} alt={sections[0].imgDescription} />
            <button className="selecteur">2</button>
                <div>
                    <h1>{sections[0].title}</h1>
                    <p>{sections[0].content}</p>
                </div> 
                </> 
                )}
        </section>

    );
};

export default PublicSectionHome;