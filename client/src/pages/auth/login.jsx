
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import {accountServices} from "@/_services/accountServices"

export default function Login() {

    const navigate = useNavigate();

    const [log, setLog] = useState({
        email: '',
        password: ''
    });

    const onChange = (e) => {
        setLog({
            ...log,
            [e.target.name]: e.target.value
        });
    };

    async function login(e) {
        e.preventDefault();
        if (log.email !=='' && log.password !==''){ 
            try {
                const r = await axios.post('http://127.0.0.1:1988/login', log)    
                if(r.status === 200){
                    const data = await r.data
                    console.log('data: ',data);
                
                    if(data.role === 1){
                        console.log(data.name);
                        accountServices.saveUsername(data.username)
                        accountServices.saveToken(data.access_token)
                        accountServices.saveRole(data.role)
                        navigate("/admin/home")
                    }else{
                        console.log(data.name);
                        accountServices.saveUsername(data.username)
                        accountServices.saveToken(data.access_token)
                        navigate("/user/home")
                    }
                }else{
                const message = r.data.message
                return alert(message)
            }
            /* const r = await fetch('http://127.0.0.1:1988/login', {
                    method: 'POST',
                    headers: {
                        'content-Type': 'application/json'
                    },
                    body: JSON.stringify(log )
                });
                if (r.ok) {
                    console.log(r);
                    const data = await r.json()
                    const name = data.name
                    console.log(`${name} est connecté`);
                    alert(`${name} est connecté`)
                    // localStorage
                    console.log(data.role);
                    if(data.role === 1){
                        navigate("/admin/home");
                    }else{
                        navigate("/user/home");
                    }
                }else{
                    console.log(r);
                    const data = await r.json()
                    const message = data.message
                    return alert(message)
                } */

            } catch (error) {
                console.log(error.message);
            }
        }else{
            alert("merci de remplir tout les champs")
            return
        }
    }

    return (
            <main className="login__container">
                <div className="form__container">
                    <form className="form" action="/login" method="post">
                        <h2>Bienvenue</h2>
                        <div className="">
                            <input className="input__info" type="email" name="email" placeholder="email" value={log.email} onChange={onChange} /><br />
                            <input className="input__info" type="password" name="password" placeholder="Password" value={log.password} onChange={onChange} />
                        </div>
                        <input className="input__button" type="submit" value="envoyer" onClick={login} /><br />
                        <a href="">Mot de passe oublié</a>
                    </form>
                </div>
            </main>
    );
}
