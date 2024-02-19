import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { accountServices } from "../../../_services/accountServices"






export default function CreateUser(){

    const navigate = useNavigate()
    
    const [datas, setDatas] = useState({
        last_name: '',
        first_name:'',
        date_of_birth:'',
        address:'',
        phone:'',
        email:'',
        password:'',

    })
    
    const onChange = (e)=>{
        setDatas({
            ...datas,
            [e.target.name]: e.target.value,
            username: `${datas.first_name}${datas.role}`
        })
    }

    async function addUser(e) {
        e.preventDefault();
        // console.log(datas);
        for (const data in datas) {
            const value = datas[data]
            // console.log(data,' : ', datas[data]);
            if(!value){
                alert('merci de remplir tout les champs ')
                return
            } 
        }
            
            try {
                const token = localStorage.getItem('token')
                console.log(datas);
                const r = await fetch('http://127.0.0.1:1988/admin/users', {
                    method: 'PUT',
                    headers: {
                        'content-Type': 'application/json',
                        'Authorization':'Bearer '+token,
                    },
                    body: JSON.stringify(datas)
                });
                if (r.ok) {
                    console.log(r);
                    const res = await r.json()
                    const name = res.data.username
                    console.log(`${name} created`);
                    alert(`${name} a ete cree`)
                    navigate("/admin/home");
                }else{
                    console.log(r);
                    const data = await r.json()
                    const message = data.message
                    return alert(message)
                }
            } catch (error) {
                console.log(error.message);
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
                                <input className="checkbox" type="radio" name= 'role' value={datas.role ='1'} disabled /* name="role_admin" disabled value={'admin'}*/ onChange={onChange} /><br />
                            </label>
                        
                            <label >
                            Employé
                                <input className="checkbox" type="radio" name="role" value={datas.role ='2'} checked /* name="role_user" checked value={'employee'} label='employé'*/ onChange={onChange} /><br />
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