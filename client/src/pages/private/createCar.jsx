import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { carServices } from "../../_services/carServices"

export default function CreateCar(){
    
    const navigate = useNavigate()
    
    const [datas, setDatas] = useState({
        seller_last_name: '',
        seller_first_name:'',
        seller_address:'',
        seller_phone:'',
        seller_email:'',
        brand:'',
        price:'',
        description:'',
        initial_registration:'',
        kilometers:'',
        model_name:'',
        model_serie:'',
        model_description:'',
        motor_type:'',
        motor_description:''
    })
    
    const onChange = (e)=>{
        setDatas({
            ...datas,
            [e.target.name]: e.target.value,
        })
    }

    const [images, setImages]= useState({
        img1:'',
        img2:'',
        img3:'',
        img4:'',
        img5:''
    })

    const handleImageChange = (e) => {
        setImages({
        ...images,
        [e.target.name]: e.target.files[0]
        });
    };

    const  addCar = async(e)=> {
        e.preventDefault();
        //controle presence et format des données ici ... a faire
            try {
            const formData = new FormData();
            for (const imageName in images) {
                formData.append(imageName, images[imageName]);
            }
            const img = await carServices.addImages(formData)
            let i = await  img.data
            if(!!i.imgId){
                datas.images = i.imgId
            }else{
                datas.images = i.id
            }
            const r = await carServices.addCar(datas)
            let res = await  r.data
            let result = `${datas.brand} ${datas.model_name} ref: ${res.car.ref} à été créée, par ${res.by} `
            alert(result)
                if(localStorage.getItem('role') === '1'){
                    navigate(`/admin/occasions/fiche/:${res.car.id}`);
                }else{
                    navigate(`/user/occasions/fiche/:${res.car.id}`);
                }
            } catch (error) {
                await carServices.deleteImages(datas.images)
                return alert(error.response.data.message);
            }
        } 
    


    return (
        <main className="login__container"> 
            <div /* className="form__container" */>
                <h2>Create Car</h2>
                <form className="form">
                    <fieldset className="">
                        <legend>Informations Voiture </legend>
                            <input className="input__info" type="text" name="brand" placeholder="Marque"  value={datas.brand}  onChange={onChange} /><br />
                            <input className="input__info" type="text" name="kilometers" placeholder="kilometres" value={datas.kilometers}  onChange={onChange} />            
                            <input className="input__info" type="text" name="price" placeholder="Prix" value={datas.price}  onChange={onChange} /> 
                            <label htmlFor="initial_registration">Date de mise en circulation</label>
                                <input className="input__info" id="initial_regitration" type="date" name="initial_registration" value={datas.initial_registration}  onChange={onChange} />                    
                            <textarea className="textarea__info" type="text" name="description" placeholder="Description" value={datas.description}  onChange={onChange} />                                
                            
                    </fieldset>
                            
                    <fieldset className="">
                        <legend>Modele</legend>
                            <input className="input__info" type="text" name="model_name" placeholder="Modele" value={datas.model_name}  onChange={onChange} />   
                            <input className="input__info" type="text" name="model_serie" placeholder="serie" value={datas.model_serie}  onChange={onChange} />   
                            <input className="input__info" type="text" name="model_description" placeholder="Description" value={datas.model_description}  onChange={onChange} />   
                            <button>Creer modele</button>
                    </fieldset>
                    <fieldset className="">
                            <legend>Moteur</legend>
                            <input className="input__info" type="text" name="motor_type" placeholder="essence / diesel etc..." value={datas.motor_type}  onChange={onChange} />   
                            <input className="input__info" type="text" name="motor_description" placeholder="1L6..." value={datas.motor_description}  onChange={onChange} />   
                            <button>Creer moteur</button>
                    </fieldset>
                    <fieldset>
                        <legend>Images</legend>
                        <label htmlFor="img1">image 1</label>
                            <input id="img1" className="input__info" type="file" name="img1" multiple accept="image/jpg, image/jpeg, image/png, image/svg"  onChange={handleImageChange} />  
                        <label htmlFor="img2">image 2</label>
                            <input id="img2" className="input__info" type="file" name="img2" multiple accept="image/jpg, image/jpeg, image/png, image/svg"  onChange={handleImageChange} />  
                        <label htmlFor="img3">image 3</label>
                            <input id="img3" className="input__info" type="file" name="img3" multiple accept="image/jpg, image/jpeg, image/png, image/svg"  onChange={handleImageChange} />  
                        <label htmlFor="img4">image 4</label>
                            <input id="img4" className="input__info" type="file" name="img4" multiple accept="image/jpg, image/jpeg, image/png, image/svg"  onChange={handleImageChange} />  
                        <label htmlFor="img5">image 5</label>
                            <input id="img5" className="input__info" type="file" name="img5" multiple accept="image/jpg, image/jpeg, image/png, image/svg"  onChange={handleImageChange} />  
                    </fieldset>
                    <fieldset className="">
                        <legend>Informations Vendeur</legend>
                            <div className="register__flex">
                                <input className="input__info" type="text" name="seller_last_name" placeholder="Nom" value={datas.seller_last_name}  onChange={onChange}/><br />
                                <input className="input__info" type="text" name="seller_first_name" placeholder="Prenom" value={datas.seller_first_name}  onChange={onChange}/> 
                                <input className="input__info" type="text" name="seller_address" placeholder="Adresse" value={datas.seller_address}  onChange={onChange}/><br />
                                <input className="input__info" type="tel" name="seller_phone" placeholder="Telephone" value={datas.seller_phone}  onChange={onChange}/>            
                                <input className="input__info" type="email" name="seller_email" placeholder="Email" value={datas.seller_email}  onChange={onChange}/><br />  
                            </div>
                    </fieldset>
                    <input className="input__button form__submit" type="submit" value="envoyer" onClick={addCar}/><br/>
                </form><br />
            </div>
        </main>
    );
};

