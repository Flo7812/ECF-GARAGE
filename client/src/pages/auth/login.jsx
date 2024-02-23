import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {accountServices} from "../../_services/accountServices.js"

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
                const r = await accountServices.axlogin(log)    
                    const data = await r.data
                    accountServices.saveUsername(data.username)
                    accountServices.saveToken(data.access_token)
                    accountServices.saveRole(data.role)
                    if(data.role === 1){                
                        navigate("/admin/home")
                    }else{
                        navigate("/user/home")
                    }

            } catch (error) {
                alert('Accés non authorisé')
                alert(error.response.data.message);
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
