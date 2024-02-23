import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { accountServices } from "../../../_services/accountServices"

export default function CreateUser(){

    const navigate = useNavigate()
    
    let [datas, setDatas] = useState({
        last_name: '',
        first_name:'',
        date_of_birth:'',
        address:'',
        phone:'',
        email:'',
        password:'',
        // username:''
    })
    
    const onChange = (e)=>{
        setDatas({
            ...datas,
            [e.target.name]: e.target.value,
        })
    }

    async function addUser(e) {
        e.preventDefault();
        for (const data in datas) {
            const value = datas[data]
            if(!value){
                alert('merci de remplir tout les champs ')
                return
            } 
        }
        try {
            const r = await accountServices.addUser(datas)
            // const r = await fetch('http://127.0.0.1:1988/admin/users', {
            //     method: 'PUT',
            //     headers: {
            //         'content-Type': 'application/json',
            //         'Authorization':'Bearer '+token,
            //     },
            //     body: JSON.stringify(datas)
            // });
            if(r.status === 200){
                console.log(r);
                let res = await r.data
                let name = res.user.username
                alert(`${name} a ete cree`)
                navigate("/admin/home");
            }else{
                // console.log('ici');
                let res = await r.data
                let message = res.message
                return alert(message)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
        <main className="login__container">
            <div className="form__container">
            <form className="form" action="" method="post">
                <h2>Bienvenue</h2>
                <div className="register__flex">
                    <input className="input__info" type="text" name="last_name" placeholder="Nom" value={datas.last_name}  onChange={onChange}/><br />
                    <input className="input__info" type="text" name="first_name" placeholder="Prenom" value={datas.first_name} onChange={onChange}/>            
                    
                    <input className="input__info" type="date" name="date_of_birth" placeholder="DDN" value={datas.date_of_birth} onChange={onChange}/>            
                </div>
                <div className="register__flex">
                    <input className="input__info" type="text" name="address" placeholder="Adresse" value={datas.address} onChange={onChange}/><br />
                    <input className="input__info" type="tel" name="phone" placeholder="Telephone" value={datas.phone} onChange={onChange}/>            
                    <input className="input__info" type="email" name="email" placeholder="Email" value={datas.email} onChange={onChange}/><br />
                    <input className="input__info" type="password" name="password" placeholder="Create password" value={datas.password} onChange={onChange}/>    
                </div>
                <div className="registr_flex">
                    <fieldset>
                        <legend>Role</legend>
                        
                            <label >
                            Admin 
                                <input className="checkbox" type="radio" name= 'role' value={datas.role ='1'} disabled onChange={onChange} /><br />
                            </label>
                        
                            <label >
                            Employé
                                <input className="checkbox" type="radio" name="role" value={datas.role ='2'} checked  onChange={onChange} /><br />
                            </label>
                        
                </fieldset>
                </div>
                <input className="input__button form__submit" type="submit" value="envoyer" onClick={addUser}/><br/>
            </form><br />

            </div>
            
        </main>
        </>
    )

}